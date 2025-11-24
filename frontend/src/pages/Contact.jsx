import React, { useState } from 'react';
import api from '../api';

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [loading,setLoading] = useState(false);
  const [status,setStatus] = useState(null);

  const onChange = e => setForm({...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/contact', form);
      setStatus({ ok: true, msg: 'Message sent. I will get back to you soon.' });
      setForm({ name:'', email:'', message:'' });
    } catch(err){
      console.error(err);
      setStatus({ ok:false, msg: 'Something went wrong. Try again later.' });
    } finally { setLoading(false); }
  }

  return (
    <section className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Contact</h2>
      <p className="text-slate-600 mb-6">Want to work together? Send me a message and I’ll reply within 1–2 business days.</p>

      {status && (
        <div className={`p-3 rounded mb-4 ${status.ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {status.msg}
        </div>
      )}

      <form onSubmit={submit} className="grid gap-4">
        <input required name="name" value={form.name} onChange={onChange} placeholder="Your name" className="p-3 rounded border"/>
        <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="Email" className="p-3 rounded border"/>
        <textarea required name="message" value={form.message} onChange={onChange} placeholder="Message" rows="6" className="p-3 rounded border"></textarea>
        <button type="submit" disabled={loading} className="px-4 py-3 bg-indigo-600 text-white rounded-lg">
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}
