import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export default function Navbar(){
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-[var(--max-w)] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-400 flex items-center justify-center text-white font-bold">BX</div>
          <div>
            <div className="font-semibold">Your Name</div>
            <div className="text-xs text-slate-500">Frontend Engineer</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/projects" className={({isActive})=>isActive ? 'text-indigo-600 font-medium' : 'text-slate-700'}>Projects</NavLink>
          <NavLink to="/about" className={({isActive})=>isActive ? 'text-indigo-600 font-medium' : 'text-slate-700'}>About</NavLink>
          <NavLink to="/contact" className={({isActive})=>isActive ? 'text-indigo-600 font-medium' : 'text-slate-700'}>Contact</NavLink>
          <NavLink to="/admin/login" className="px-3 py-1 rounded-lg text-sm border">Admin</NavLink>
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function MobileMenu(){
  // Very small simple mobile menu
  const [open,setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button onClick={()=>setOpen(!open)} aria-expanded={open} className="p-2 rounded-md border">
        ☰
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg p-3 flex flex-col gap-2">
          <Link to="/projects" onClick={()=>setOpen(false)} className="text-sm">Projects</Link>
          <Link to="/about" onClick={()=>setOpen(false)} className="text-sm">About</Link>
          <Link to="/contact" onClick={()=>setOpen(false)} className="text-sm">Contact</Link>
          <Link to="/admin/login" onClick={()=>setOpen(false)} className="text-sm border px-2 py-1 rounded">Admin</Link>
        </div>
      )}
    </div>
  );
}
