import React from 'react';
import { AlertTriangle, Clock, CheckCircle } from 'lucide-react';

export default function UrgencyBadge({ urgency }) {
  const getStyle = () => {
    switch (urgency) {
      case 'High':
        return {
          bg: 'bg-red-500/10 border-red-500/30 text-red-400',
          icon: <AlertTriangle className="w-3.5 h-3.5" />
        };
      case 'Moderate':
        return {
          bg: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
          icon: <Clock className="w-3.5 h-3.5" />
        };
      default:
        return {
          bg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
          icon: <CheckCircle className="w-3.5 h-3.5" />
        };
    }
  };

  const style = getStyle();

  return (
    <div className="flex items-center gap-2">
      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Urgency:</span>
      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border flex items-center gap-1.5 ${style.bg}`}>
        {style.icon}
        <span>{urgency} Priority</span>
      </span>
    </div>
  );
}