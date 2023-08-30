import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function StudentList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'https://localhost:44381/api/app/student';

    // Fetch data from the API
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  // Function to handle student deletion
  const handleDelete = async (id) => {
    try {
      const apiUrl = `https://localhost:44381/api/app/student/${id}`;

      // Send a DELETE request to the API
      await axios.delete(apiUrl);

      // Remove the deleted student from the local data
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  return (
    <div className='container'>
      <h1 align='center'>Students</h1>
      <br></br>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Father Name</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Actions</th> {/* Update table header */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.fatherName}</td>
              <td>{item.mobile}</td>
              <td>{item.address}</td>
              <td>
                <Link to={`/edit/${item.id}`} className='btn btn-primary mr-2'>
                  Edit
                </Link>
                <button
                  className='btn btn-danger'
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
