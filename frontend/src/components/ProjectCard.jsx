import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }){
  return (
    <article className="card hover:shadow-lg transition">
      <Link to={`/projects/${project._id}`}>
        <div className="h-44 w-full bg-slate-100 flex items-center justify-center overflow-hidden">
          <img
            src={project.images?.[0] || `https://picsum.photos/seed/${project._id}/800/600`}
            alt={project.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm mt-2 text-slate-600 line-clamp-3">{project.shortDesc}</p>
          <div className="mt-3 flex gap-2 flex-wrap">
            {project.tech?.slice(0,5).map(t => <span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded">{t}</span>)}
          </div>
        </div>
      </Link>
    </article>
  );
}
