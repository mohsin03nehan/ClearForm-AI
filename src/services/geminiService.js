import { MOCK_RESPONSES } from '../data/mockData';

export async function processDocumentWithGemini(documentText, apiKey, targetLang = 'en', sampleId = null) {
  // If no API Key provided, use fallback Engine
  if (!apiKey || apiKey.trim() === '') {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate realistic processing delay
    
    if (sampleId && MOCK_RESPONSES[sampleId]) {
      const sample = MOCK_RESPONSES[sampleId];
      return {
        urgency: sample.urgency,
        deadlines: sample.deadlines,
        summary: sample.summary[targetLang] || sample.summary['en'],
        tasks: sample.tasks[targetLang] || sample.tasks['en']
      };
    }

    return {
      urgency: "Moderate",
      deadlines: ["Check text for specific date"],
      summary: [
        "This document requires your immediate review and action.",
        "Primary obligations and requirements are highlighted in the action checklist below.",
        "Ensure all requested materials or payments are processed promptly."
      ],
      tasks: [
        "Review key dates and statutory obligations listed in the text",
        "Contact issuing authority if clarification on terms is needed",
        "Store a copy of this document for official records"
      ]
    };
  }

  // Live Gemini API Call
  try {
    const prompt = `
      You are ClearForm AI, an expert assistant that converts complex legal, medical, and official government paperwork into simple plain English or regional languages.

      Analyze the following document text and output ONLY a valid JSON object matching this structure:
      {
        "urgency": "High" | "Moderate" | "Low",
        "deadlines": ["list of explicit deadlines or dates found"],
        "summary": ["3 concise key bullet points in ${targetLang === 'ur' ? 'Urdu language' : targetLang === 'es' ? 'Spanish language' : 'Plain Simple English'}"],
        "tasks": ["3 to 4 step-by-step actionable tasks in ${targetLang === 'ur' ? 'Urdu language' : targetLang === 'es' ? 'Spanish language' : 'Plain Simple English'}"]
      }

      Document Text:
      """${documentText}"""
    `;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { response_mime_type: "application/json" }
      })
    });

    if (!response.ok) {
      throw new Error(`Gemini API Error: ${response.statusText}`);
    }

    const data = await response.json();
    const parsedJSON = JSON.parse(data.candidates[0].content.parts[0].text);
    return parsedJSON;
  } catch (err) {
    console.error("Gemini Service Error:", err);
    throw err;
  }
}