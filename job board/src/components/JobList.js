import React from 'react';

const jobs = [
  { id: 1, title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote' },
  { id: 2, title: 'Backend Developer', company: 'Dev Solutions', location: 'New York' },
  { id: 3, title: 'Fullstack Engineer', company: 'Web Works', location: 'San Francisco' }
];

function JobList() {
  return (
    <div>
      {jobs.map(job => (
        <div key={job.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h2>{job.title}</h2>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
        </div>
      ))}
    </div>
  );
}

export default JobList;
