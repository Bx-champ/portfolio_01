import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin(){
  const navigate = useNavigate();
  const [form,setForm] = React.useState({ email:'', password:'' });

  const submit = (e)=>{
    e.preventDefault();
    // for now just navigate - replace with real api login -> set token
    navigate('/admin');
  }

  return (
    <div className="max-w-md mx-auto card p-6">
      <h2 className="text-xl font-semibold mb-4">Admin login</h2>
      <form onSubmit={submit} className="grid gap-3">
        <input required name="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="email" className="p-3 border rounded" />
        <input required type="password" name="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} placeholder="password" className="p-3 border rounded" />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Login</button>
      </form>
    </div>
  );
}
