import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

function AddStudent() {
  const [formData, setFormData] = useState({
    firstName: '',
    fatherName: '',
    mobile: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); // Use useNavigate for navigation

  const apiUrl = 'https://localhost:44381/api/app/student';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(apiUrl, formData);
      console.log('Student added successfully:', response.data);

      // Clear the form after successful submission
      setFormData({
        firstName: '',
        fatherName: '',
        mobile: '',
        address: '',
      });

      // Navigate to the list page after successful submission
      navigate('/list'); // Use navigate to go to the list page
    } catch (error) {
      console.error('Error adding student:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Father Name:</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Mobile:</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Adding...' : 'Add Student'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStudent;
