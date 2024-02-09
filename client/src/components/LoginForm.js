import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Login Successful', data);
        // Handle successful login, e.g., saving the session, redirecting to a dashboard, etc.
      } else {
        // Handle errors, such as incorrect credentials
        console.error('Login failed');
      }
    } catch (error) {
      console.error('There was a problem with the login request:', error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
      className="form-input"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
      className="form-input"
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button className="form-button" type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
