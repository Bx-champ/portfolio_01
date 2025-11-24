import React, { useEffect, useState } from 'react';
import api from '../api';
import ProjectCard from '../components/ProjectCard';

export default function Projects(){
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    let mounted = true;
    api.get('/projects')
      .then(res => mounted && setProjects(res.data))
      .catch(err => {
        console.error(err);
      })
      .finally(()=> mounted && setLoading(false));
    return ()=> mounted = false;
  },[]);

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold">Projects</h2>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.length === 0 ? (
            <div className="text-slate-600">No projects yet — add some in the admin panel.</div>
          ) : (
            projects.map(p => <ProjectCard key={p._id} project={p} />)
          )}
        </div>
      )}
    </section>
  );
}
