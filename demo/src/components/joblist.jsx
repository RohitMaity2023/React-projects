import React, { useState } from 'react';
import JobCard from './jobcard';

const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Solutions',
    location: 'Remote',
    salary: '₹10 - ₹15 LPA',
    description: 'Build and maintain React applications using modern tools.',
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'CodeWorks',
    location: 'Bangalore',
    salary: '₹12 - ₹18 LPA',
    description: 'Work on APIs, databases, and backend logic with Node.js.',
  },
  {
  id: 3,
  title: 'UI/UX Designer',
  company: 'Creative Minds',
  location: 'Mumbai',
  salary: '₹8 - ₹12 LPA',
  description: 'Design user interfaces and improve user experiences.'
},
{
  id: 4,
  title: 'Data Scientist',
  company: 'DataWiz',
  location: 'Remote',
  salary: '₹15 - ₹22 LPA',
  description: 'Analyze large datasets and create predictive models.'
},
{
  id: 5,
  title: 'DevOps Engineer',
  company: 'CloudNova',
  location: 'Hyderabad',
  salary: '₹14 - ₹20 LPA',
  description: 'Maintain CI/CD pipelines and infrastructure automation.'
}

];

const JobList = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <section className="job-list">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onClick={() => setSelectedJob(job)} />
      ))}

      {selectedJob && (
        <div className="job-details" style={{ background: '#eee', padding: '20px', marginTop: '20px' }}>
          <h2>{selectedJob.title} - {selectedJob.company}</h2>
          <p><strong>Location:</strong> {selectedJob.location}</p>
          <p><strong>Salary:</strong> {selectedJob.salary}</p>
          <p>{selectedJob.description}</p>
        </div>
      )}
    </section>
  );
};

export default JobList;
