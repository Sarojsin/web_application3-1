import React, { useState } from 'react';
import './Details.css';

const Details = () => {

  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", roll: "101", year: "2023", sem: "4th", program: "CS", status: "Pass" },
    { id: 2, name: "Jane Smith", roll: "102", year: "2023", sem: "4th", program: "CS", status: "Fail" },
    { id: 3, name: "Mike Ross", roll: "105", year: "2022", sem: "6th", program: "Law", status: "Pass" },
  ]);

  const [statusFilter, setStatusFilter] = useState('');

  const handleDelete = (idToDelete) => {
    if (!window.confirm("Are you sure you want to delete this student?")) {
      return;
    }
    setStudents(prevStudents =>
      prevStudents.filter(student => student.id !== idToDelete)
    );
  };

  // 3. Filter logic (now uses the state version of students)

  
  const filteredStudents = students.filter(student => {
    return statusFilter ? student.status === statusFilter : true;
  });

  return (
    <div className="details-container">
      <div className="details-header">
        <h1>Student Details</h1>
        <button className="add-btn">Add Student</button>
      </div>

      <div className="filters-bar">
        <div className="filter-group">
          {/* SVG Filter Icon */}
          <svg
            width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="filter-icon"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
          <label>Filter by Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="filter-select"
          >
            <option value="">All Students</option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>
        </div>

        {statusFilter && (
          <button className="reset-btn" onClick={() => setStatusFilter('')}>
            Clear Filter
          </button>
        )}
      </div>

      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Enroll Year</th>
              <th>Semester</th>
              <th>Program</th>
              <th>Status</th>
              <th style={{ textAlign: 'center' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.roll}</td>
                  <td>{student.year}</td>
                  <td>{student.sem}</td>
                  <td>{student.program}</td>
                  <td>
                    <span className={`status-badge ${student.status.toLowerCase()}`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="action-cell">
                    <button className="action-btn view-btn">👁️</button>
                    <button className="action-btn edit-btn">✏️</button>
                    {/* 4. Connect delete button */}
                    <button
                      className="action-btn delete-btn"
                      onClick={() => handleDelete(student.id)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center", padding: "30px", color: "#888" }}>
                  No students found with status "{statusFilter}".
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Details;