import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'left' }}>
      <h2 style={{ color: '#FF5722' }}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ padding: '5px', fontSize: '14px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ padding: '5px', fontSize: '14px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{ padding: '5px', fontSize: '14px', width: '100%', height: '80px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#FF5722', color: '#fff', border: 'none' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
