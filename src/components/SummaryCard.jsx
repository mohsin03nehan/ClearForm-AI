import React from 'react';
import { CheckCircle2, Calendar } from 'lucide-react';

export default function SummaryCard({ summary, deadlines }) {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-indigo-400" />
          Plain-English Key Takeaways
        </h4>
        <ul className="space-y-2.5">
          {summary.map((point, idx) => (
            <li 
              key={idx} 
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-200 leading-relaxed flex items-start gap-3"
            >
              <span className="text-indigo-400 font-bold mt-0.5">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {deadlines && deadlines.length > 0 && (
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3.5 flex items-center gap-3">
          <Calendar className="w-5 h-5 text-amber-400 shrink-0" />
          <p className="text-xs text-amber-200">
            <span className="font-bold">Detected Deadlines:</span> {deadlines.join(', ')}
          </p>
        </div>
      )}
    </div>
  );
}