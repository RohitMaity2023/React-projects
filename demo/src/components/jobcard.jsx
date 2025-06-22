import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/jobs/${job.id}`);
  };

  return (
    <div className="job-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h2>{job.title}</h2>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <p><strong>Salary:</strong> {job.salary}</p>
    </div>
  );
};

export default JobCard;


