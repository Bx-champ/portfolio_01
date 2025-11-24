import React from 'react';
export default function Footer(){
  return (
    <footer className="w-full border-t bg-white mt-8">
      <div className="max-w-[var(--max-w)] mx-auto px-4 sm:px-6 py-6 flex items-center justify-between text-sm text-slate-600">
        <div>© {new Date().getFullYear()} Your Name. Built with React + Tailwind.</div>
        <div className="flex gap-3">
          <a href="#" aria-label="github" className="underline">GitHub</a>
          <a href="#" aria-label="linkedin" className="underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
