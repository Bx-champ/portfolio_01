import React from 'react';
export default function AdminDashboard(){
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
        <div className="text-sm text-slate-500">Basic admin controls</div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-4">Create Project (form goes here)</div>
        <div className="card p-4">Messages</div>
        <div className="card p-4">Site Settings</div>
      </div>
    </div>
  );
}
