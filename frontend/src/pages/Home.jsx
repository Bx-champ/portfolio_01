import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <section className="grid gap-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Hi — I’m Your Name.<br/>I build polished frontends & delightful UI.</h1>
          <p className="mt-4 text-slate-600 max-w-xl">
            I’m a MERN stack developer focused on fast, accessible, and beautifully designed web experiences. I build production-ready applications with clean code and excellent UX.
          </p>

          <div className="mt-6 flex gap-3">
            <Link to="/projects" className="px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:opacity-95">See Projects</Link>
            <Link to="/contact" className="px-5 py-3 border rounded-lg">Contact Me</Link>
          </div>
        </div>

        <div className="p-8 bg-white rounded-2xl shadow-md">
          <h4 className="font-semibold mb-3">Featured project</h4>
          <div className="h-40 bg-slate-100 rounded-lg flex items-center justify-center">
            <div className="text-slate-400">Project card preview</div>
          </div>
          <div className="mt-4 flex gap-2">
            <span className="text-xs bg-slate-100 px-2 py-1 rounded">React</span>
            <span className="text-xs bg-slate-100 px-2 py-1 rounded">Tailwind</span>
            <span className="text-xs bg-slate-100 px-2 py-1 rounded">Node.js</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Selected Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* This is a placeholder. Replace with dynamic Projects component or import Projects. */}
          <div className="card p-4">Project placeholder</div>
          <div className="card p-4">Project placeholder</div>
          <div className="card p-4">Project placeholder</div>
        </div>
      </div>
    </section>
  );
}
