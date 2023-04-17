import React, { useState, useEffect } from 'react';

function Portfolio() {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.github.com/users/FelloMan/repos')
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <div>
          {projects.map(project => (
            <div key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Portfolio;