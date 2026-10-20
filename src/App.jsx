import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ApiKeyModal from './components/ApiKeyModal';
import DocumentInput from './components/DocumentInput';
import UrgencyBadge from './components/UrgencyBadge';
import SummaryCard from './components/SummaryCard';
import TaskChecklist from './components/TaskChecklist';
import { SAMPLE_DOCUMENTS } from './data/sampleDocs';
import { processDocumentWithGemini } from './services/geminiService';
import { Volume2, VolumeX, FileText, Brain } from 'lucide-react';

export default function App() {
  const [apiKey, setApiKey] = useState(localStorage.getItem('gemini_api_key') || '');
  const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [currentSample, setCurrentSample] = useState(null);
  const [currentLang, setCurrentLang] = useState('en');
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [completedTasks, setCompletedTasks] = useState({});
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleSaveKey = (key) => {
    setApiKey(key);
    localStorage.setItem('gemini_api_key', key);
  };

  const handleSelectSample = (sampleId) => {
    setCurrentSample(sampleId);
    setInputText(SAMPLE_DOCUMENTS[sampleId].text);
  };

  const handleToggleTask = (index) => {
    setCompletedTasks(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const handleSpeak = () => {
    if (!result) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToRead = `ClearForm AI Summary. Urgency Level: ${result.urgency}. Key Takeaways: ${result.summary.join('. ')}. Action Steps: ${result.tasks.join('. ')}`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    if (currentLang === 'ur') utterance.lang = 'ur-PK';
    if (currentLang === 'es') utterance.lang = 'es-ES';

    utterance.onend = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleProcess = async () => {
    if (!inputText.trim()) return;

    setLoading(true);
    setCompletedTasks({});
    setResult(null);

    try {
      const data = await processDocumentWithGemini(inputText, apiKey, currentLang, currentSample);
      setResult(data);
    } catch (err) {
      alert("Error processing document. Falling back to built-in Mock Engine.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDarkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Header 
          apiKey={apiKey}
          onOpenKeyModal={() => setIsKeyModalOpen(true)}
          currentLang={currentLang}
          onChangeLang={setCurrentLang}
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        />

        <ApiKeyModal 
          isOpen={isKeyModalOpen}
          onClose={() => setIsKeyModalOpen(false)}
          apiKey={apiKey}
          onSaveKey={handleSaveKey}
        />

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel: Input & Controls */}
          <DocumentInput 
            inputText={inputText}
            setInputText={(text) => { setInputText(text); setCurrentSample(null); }}
            currentSample={currentSample}
            onSelectSample={handleSelectSample}
            onProcess={handleProcess}
            loading={loading}
          />

          {/* Right Panel: AI Results Showcase */}
          <div className="dark:bg-slate-900/60 bg-white border dark:border-slate-800 border-slate-200 rounded-3xl p-6 min-h-[500px] flex flex-col justify-between shadow-sm">
            {!result && !loading && (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 my-auto">
                <div className="dark:bg-slate-900 bg-slate-100 p-4 rounded-2xl mb-4 border dark:border-slate-800 border-slate-200">
                  <FileText className="w-10 h-10 text-slate-400 dark:text-slate-500" />
                </div>
                <h3 className="text-lg font-semibold dark:text-slate-300 text-slate-700 mb-1">Ready for Document Analysis</h3>
                <p className="text-xs text-slate-500 max-w-xs">
                  Select a sample on the left or paste your own document, then click "Simplify Document Now".
                </p>
              </div>
            )}

            {loading && (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 my-auto">
                <div className="relative mb-6">
                  <div className="w-16 h-16 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
                  </div>
                </div>
                <h3 className="text-base font-semibold dark:text-slate-200 text-slate-800">Processing Natural Language Schema</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Extracting plain-English summary, deadlines & actionable tasks...</p>
              </div>
            )}

            {result && !loading && (
              <div className="space-y-6">
                {/* Top Controls */}
                <div className="flex items-center justify-between pb-4 border-b dark:border-slate-800 border-slate-200">
                  <UrgencyBadge urgency={result.urgency} />

                  <button 
                    onClick={handleSpeak}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border flex items-center gap-2 transition ${
                      isSpeaking 
                        ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30' 
                        : 'dark:bg-slate-900 bg-slate-100 dark:border-slate-800 border-slate-200 dark:text-slate-300 text-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    <span>{isSpeaking ? "Stop Audio" : "Listen to Summary"}</span>
                  </button>
                </div>

                {/* Summary Component */}
                <SummaryCard 
                  summary={result.summary} 
                  deadlines={result.deadlines} 
                />

                {/* Interactive Task Checklist */}
                <TaskChecklist 
                  tasks={result.tasks} 
                  completedTasks={completedTasks} 
                  onToggleTask={handleToggleTask} 
                />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}