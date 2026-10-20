import React, { useState } from 'react';
import { X, Key, ExternalLink } from 'lucide-react';

export default function ApiKeyModal({ isOpen, onClose, apiKey, onSaveKey }) {
  const [inputKey, setInputKey] = useState(apiKey);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveKey(inputKey);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="bg-indigo-600/20 text-indigo-400 p-2.5 rounded-xl border border-indigo-500/30">
            <Key className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Gemini API Settings</h3>
            <p className="text-xs text-slate-400">Configure your key for live NLP document extraction</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Google Gemini API Key
            </label>
            <input 
              type="password" 
              value={inputKey} 
              onChange={(e) => setInputKey(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 font-mono"
            />
          </div>

          <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 text-xs text-slate-400 space-y-1.5">
            <p className="flex items-center justify-between">
              <span>Don't have an API key?</span>
              <a 
                href="https://aistudio.google.com/" 
                target="_blank" 
                rel="noreferrer"
                className="text-indigo-400 hover:underline flex items-center gap-1 font-medium"
              >
                Get Key on Google AI Studio <ExternalLink className="w-3 h-3" />
              </a>
            </p>
            <p className="text-slate-500">
              *If left blank, ClearForm AI will automatically run using its built-in Smart Mock Engine for live demonstrations.
            </p>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white transition"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-xl text-xs font-semibold transition"
            >
              Save Configuration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}