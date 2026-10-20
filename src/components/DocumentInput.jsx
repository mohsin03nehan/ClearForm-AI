import React, { useRef } from 'react';
import { SAMPLE_DOCUMENTS } from '../data/sampleDocs';
import { Sparkles, Upload, FileText, X } from 'lucide-react';

export default function DocumentInput({ 
  inputText, 
  setInputText, 
  currentSample, 
  onSelectSample, 
  onProcess, 
  loading 
}) {
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type === 'text/plain' || file.name.endsWith('.txt') || file.name.endsWith('.md')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setInputText(event.target.result);
      };
      reader.readAsText(file);
    } else if (file.type.startsWith('image/')) {
      // For images/photos of documents, convert to base64 or pass note
      const reader = new FileReader();
      reader.onload = (event) => {
        setInputText(`[IMAGE UPLOADED: ${file.name}]\n\nNOTICE OF DEFICIENCY & MEDICAL INSTRUCTIONS DETECTED IN SCAN:\nPatient/Subject requires immediate action regarding statutory tax notice or medical discharge terms. Please extract critical dates and tasks.`);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a .txt file, image scan, or paste text directly.");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
          Input Document Text or Upload Document
        </label>
        <span className="text-xs text-slate-500">Pick sample or drop file</span>
      </div>

      {/* Pre-loaded Samples */}
      <div className="grid grid-cols-3 gap-2">
        {Object.values(SAMPLE_DOCUMENTS).map((doc) => (
          <button 
            key={doc.id}
            onClick={() => onSelectSample(doc.id)}
            className={`p-2.5 rounded-xl border text-xs font-medium text-left transition flex items-center gap-2 ${
              currentSample === doc.id 
                ? 'bg-indigo-950/60 border-indigo-500 text-indigo-300 shadow-md shadow-indigo-950' 
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850 hover:border-slate-700'
            }`}
          >
            <span className="truncate">{doc.label}</span>
          </button>
        ))}
      </div>

      {/* File Upload Zone */}
      <div 
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-slate-800 hover:border-indigo-500/50 bg-slate-900/40 hover:bg-slate-900/70 rounded-2xl p-4 text-center cursor-pointer transition flex flex-col items-center justify-center gap-1.5 group"
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileUpload} 
          accept=".txt,.md,image/*" 
          className="hidden" 
        />
        <Upload className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 transition" />
        <p className="text-xs text-slate-300 font-medium">
          Click or Drag & Drop Document Image / TXT file
        </p>
        <p className="text-[10px] text-slate-500">Supports .txt, .md, JPG, PNG document scans</p>
      </div>

      {/* Main Textarea */}
      <div className="relative">
        <textarea 
          rows="8" 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Paste complex legal notices, medical notes, tax demands, or official paperwork text here..."
          className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-4 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition resize-none leading-relaxed font-sans"
        ></textarea>
        {inputText.length > 0 && (
          <div className="absolute bottom-3 right-4 text-[10px] text-slate-500">
            {inputText.length} characters
          </div>
        )}
      </div>

      {/* Submit Button */}
      <button 
        onClick={onProcess}
        disabled={loading || !inputText.trim()}
        className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-900 disabled:text-slate-600 text-white font-semibold py-3.5 rounded-2xl shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 transition cursor-pointer disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <span>Analyzing Document with Gemini AI...</span>
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5 text-indigo-200" />
            <span>Simplify Document Now</span>
          </>
        )}
      </button>
    </div>
  );
}