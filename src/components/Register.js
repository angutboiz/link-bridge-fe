import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password_hash: '',
    full_name: '',
    profile_picture: '',
    cover_photo: '',
    date_of_birth: '',
    gender: '',
    bio: '',
    friends: [], // Giả sử bạn không thêm bạn bè ngay từ form này
    friend_count: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users', formData)
      .then(response => {
        console.log('User added:', response.data);
        alert('User added successfully!');
      })
      .catch(error => {
        console.error('There was an error adding the user!', error);
        alert('Error adding user');
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password Hash:
          <input type="text" name="password_hash" value={formData.password_hash} onChange={handleChange} />
        </label>
        <br />
        <label>
          Full Name:
          <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
