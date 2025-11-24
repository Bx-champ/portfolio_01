import React from 'react';

export default function About(){
  return (
    <section className="max-w-3xl">
      <h2 className="text-3xl font-semibold mb-4">About me</h2>
      <p className="text-slate-700 mb-4">
        I’m a MERN stack developer who loves solving product problems and shipping clean UI. I build accessible, performant web apps with an eye for design.
      </p>

      <h3 className="mt-6 font-semibold">Skills</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {['React','Node.js','Express','MongoDB','Tailwind','TypeScript','AWS'].map(s => <div key={s} className="text-xs px-2 py-1 bg-slate-100 rounded">{s}</div>)}
      </div>
    </section>
  );
}
