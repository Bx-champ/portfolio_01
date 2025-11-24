import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';

import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-[var(--max-w)] mx-auto px-4 sm:px-6 py-8">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/:id" element={<ProjectDetail/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />

          <Route path="/admin/login" element={<AdminLogin/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
