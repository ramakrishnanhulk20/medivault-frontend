import { useState } from 'react';
import { toast } from '../../utils/toast';

interface CopyButtonProps {
  text: string;
  label?: string;
}

export default function CopyButton({ text, label = 'Copy' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success('Copied!', `${label} copied to clipboard`);
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy', 'Please try again');
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center space-x-1 px-2 py-1 rounded hover:bg-slate-100 transition-colors group"
      title={`Copy ${label}`}
    >
      {copied ? (
        <>
          <svg className="w-4 h-4 text-success-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-xs text-success-600">Copied!</span>
        </>
      ) : (
        <>
          <svg className="w-4 h-4 text-slate-400 group-hover:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span className="text-xs text-slate-600 group-hover:text-slate-900">{label}</span>
        </>
      )}
    </button>
  );
}
