import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectForm = ({ projectId, initialData, onSuccess }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [technologies, setTechnologies] = useState(initialData?.technologies?.join(', ') || '');
  const [github, setGithub] = useState(initialData?.github || '');
  const [demo, setDemo] = useState(initialData?.demo || '');
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('technologies', technologies);
    formData.append('github', github);
    formData.append('demo', demo);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      };

      let response;
      if (projectId) {
        response = await axios.patch(`http://localhost:4444/projects/${projectId}`, formData, config);
      } else {
        response = await axios.post('http://localhost:4444/projects', formData, config);
      }
      console.log('Response:', response.data);
      alert('Project saved successfully');
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Failed to save project', error.response ? error.response.data : error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Technologies</label>
        <input
          type="text"
          value={technologies}
          onChange={(e) => setTechnologies(e.target.value)}
        />
      </div>
      <div>
        <label>GitHub URL</label>
        <input
          type="text"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
      </div>
      <div>
        <label>Demo URL</label>
        <input
          type="text"
          value={demo}
          onChange={(e) => setDemo(e.target.value)}
        />
      </div>
      <div>
        <label>Upload Image</label>
        <input
          type="file"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
      </div>
      <button type="submit">Save Project</button>
    </form>
  );
};

export default ProjectForm;
