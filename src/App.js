import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { StudentList } from './components/studentlist';
import AddStudent from './components/addstudent';
import EditStudent from './components/editstudent';
import NavigationBar from './components/navigationBar';
// Import the necessary components from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<StudentList />} />
            <Route path="/list" element={<StudentList />} />
            <Route path="/create" element={<AddStudent />} />
            <Route path="/edit/:id" element={<EditStudent />} /> {/* Add this route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
