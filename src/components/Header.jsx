import React from 'react';
import { FileCheck2, Key, Globe, Sun, Moon } from 'lucide-react';

export default function Header({ apiKey, onOpenKeyModal, currentLang, onChangeLang, isDarkMode, onToggleTheme }) {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center pb-6 border-b border-slate-800 dark:border-slate-800 border-slate-200 mb-8 gap-4">
      <div>
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 text-white p-2.5 rounded-xl shadow-lg shadow-indigo-500/20">
            <FileCheck2 className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight dark:text-white text-slate-900">
              ClearForm <span className="text-indigo-600 dark:text-indigo-400">AI</span>
            </h1>
          </div>
        </div>
        <p className="dark:text-slate-400 text-slate-600 text-xs sm:text-sm mt-1.5">
          Transform dense legal, medical & official documents into clear, actionable steps.
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
        {/* Theme Toggle Button */}
        <button
          onClick={onToggleTheme}
          className="p-2 rounded-lg border dark:bg-slate-900 dark:border-slate-800 dark:text-amber-400 bg-white border-slate-200 text-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          title="Toggle Theme"
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Language Selector */}
        <div className="flex items-center dark:bg-slate-900 bg-white border dark:border-slate-800 border-slate-200 rounded-lg p-1">
          <Globe className="w-4 h-4 text-slate-400 ml-2 mr-1" />
          <select 
            value={currentLang} 
            onChange={(e) => onChangeLang(e.target.value)}
            className="bg-transparent text-xs dark:text-slate-300 text-slate-700 font-medium py-1 pr-2 focus:outline-none cursor-pointer"
          >
            <option value="en" className="dark:bg-slate-900 bg-white dark:text-slate-200 text-slate-800">English</option>
            <option value="ur" className="dark:bg-slate-900 bg-white dark:text-slate-200 text-slate-800">اردو (Urdu)</option>
            <option value="es" className="dark:bg-slate-900 bg-white dark:text-slate-200 text-slate-800">Español</option>
          </select>
        </div>

        {/* API Key Modal Button */}
        <button 
          onClick={onOpenKeyModal}
          className="text-xs dark:bg-slate-900 bg-white dark:hover:bg-slate-800 hover:bg-slate-100 dark:text-slate-300 text-slate-700 px-3 py-2 rounded-lg border dark:border-slate-800 border-slate-200 flex items-center gap-2 transition"
        >
          <Key className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
          <span>{apiKey ? 'API Key Configured' : 'Configure API Key'}</span>
        </button>
      </div>
    </header>
  );
}