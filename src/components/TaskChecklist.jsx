import React from 'react';
import { ListTodo, CheckSquare, Square } from 'lucide-react';

export default function TaskChecklist({ tasks, completedTasks, onToggleTask }) {
  return (
    <div>
      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
        <ListTodo className="w-4 h-4 text-emerald-400" />
        Actionable Step-by-Step Tasks
      </h4>
      <div className="space-y-2">
        {tasks.map((task, idx) => {
          const isDone = !!completedTasks[idx];
          return (
            <div 
              key={idx} 
              onClick={() => onToggleTask(idx)}
              className={`p-3.5 rounded-xl border transition cursor-pointer flex items-center gap-3 select-none ${
                isDone 
                  ? 'bg-emerald-950/20 border-emerald-900/40 text-slate-400 line-through' 
                  : 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700'
              }`}
            >
              {isDone ? (
                <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <Square className="w-4 h-4 text-slate-500 shrink-0" />
              )}
              <span className="text-sm leading-snug">{task}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}