import React from 'react';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>Close</button>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectModal;
