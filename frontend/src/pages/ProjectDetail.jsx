import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

export default function ProjectDetail(){
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(()=>{
    api.get(`/projects/${id}`)
      .then(res => setProject(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if(!project) return <div>Loading...</div>;

  return (
    <article className="space-y-6">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <img src={project.images?.[0] || `https://picsum.photos/seed/${project._id}/1000/600`} alt={project.title} className="rounded-lg w-full h-72 object-cover"/>
          <p className="mt-4 text-slate-700">{project.longDesc}</p>
        </div>
        <aside className="p-4 bg-white rounded-2xl shadow">
          <h4 className="font-semibold">Tech</h4>
          <div className="mt-3 flex flex-wrap gap-2">{project.tech?.map(t => <span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded">{t}</span>)}</div>

          <div className="mt-4 flex flex-col gap-2">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="underline">View Live</a>}
            {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer" className="underline">View Code</a>}
          </div>
        </aside>
      </div>
    </article>
  );
}
