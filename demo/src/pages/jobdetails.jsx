import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Solutions',
    location: 'Remote',
    salary: '₹10 - ₹15 LPA',
    description: 'Build UI components using React.'
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'CodeWorks',
    location: 'Bangalore',
    salary: '₹12 - ₹18 LPA',
    description: 'Work on APIs, databases, and backend logic with Node.js.'
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

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobs.find(job => job.id === parseInt(id));

  if (!job) return <p>Job not found!</p>;

  return (
    <div style={{ padding: '40px', background: '#eee', minHeight: '100vh' }}>
<h1>{job.title} - {job.company}</h1>
<p><strong>Location:</strong> {job.location}</p>
<p><strong>Salary:</strong> {job.salary}</p>
<p>{job.description}</p>

{/* 👇 Back button now comes last */}
<button
  onClick={() => navigate('/')}
  style={{
    marginTop: '30px',
    padding: '10px 20px',
    fontSize: '1rem',
    background: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer'
  }}
>
  ← Back to Jobs
</button>

    </div>
  );
};

export default JobDetails;
