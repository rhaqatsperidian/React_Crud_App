import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    fatherName: '',
    mobile: '',
    address: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const apiUrl = `https://localhost:44381/api/app/student/${id}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const studentData = response.data;
        setFormData(studentData);
      })
      .catch((error) => {
        console.error('Error fetching student data:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl = `https://localhost:44381/api/app/student/${id}`;

      const response = await axios.put(apiUrl, formData);
      console.log('Student updated successfully:', response.data);

      // Navigate to the list page after successful update
      navigate('/list');
    } catch (error) {
      console.error('Error updating student:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="form-group">
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Updating...' : 'Update Student'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditStudent;
