# ClearForm AI — Document Simplifier & Action Assistant 🚀

> An AI-powered web application that transforms dense legal, medical, tax, and official government paperwork into plain-language summaries and step-by-step actionable task lists.

---

## 🌟 Key Features

* **Instant Plain-Language & Urgency Analysis:** Extracts key takeaways, calculates color-coded urgency levels (High, Moderate, Low Priority), and highlights critical deadlines.
* **Interactive Task Checklist:** Automatically converts procedural legal, medical, or administrative instructions into actionable, clickable checkboxes.
* **Document Scan & File Support:** Allows pasting raw text or uploading document files (.txt, .md, images/scans).
* **Accessibility Suite:** Built-in browser Text-to-Speech audio reader ("Listen to Summary") and a one-click multilingual translation toggle (English, Urdu, Spanish).
* **Dark / Light Theme:** Clean, modern, responsive high-contrast UI with dynamic dark and light mode switching.
* **Resilient Dual Engine:** Integrated with Google Gemini 1.5 Flash API with built-in client-side fallback data for offline testing.

---

## 🛠️ Tech Stack

* **Frontend Framework:** React 18 + Vite
* **Styling:** Tailwind CSS + Lucide Icons
* **AI Engine:** Google Gemini API (`gemini-1.5-flash`)
* **Deployment:** Vercel

---

## 📁 Directory Structure

```text
clearform-ai/
├── public/
├── src/
│   ├── components/       # Header, ApiKeyModal, DocumentInput, SummaryCard, TaskChecklist, UrgencyBadge
│   ├── data/             # Mock data and sample documents
│   ├── services/         # Gemini API integration service
│   ├── styles/           # Tailwind index CSS
│   ├── App.jsx           # Main Application Layout & State Management
│   └── main.jsx          # Entry Point
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md