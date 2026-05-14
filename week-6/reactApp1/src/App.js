import React, { useState } from "react";
import "./App.css";

export default function UserManagement() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.age) {
      alert("Please fill all fields");
      return;
    }

    setUsers([...users, formData]);

    setFormData({
      name: "",
      email: "",
      age: ""
    });
  };

  return (
    <div className="container">
      <header className="app-header">
        <h1>User Directory</h1>
        <p>A simple system to manage and list application users.</p>
      </header>

      <section className="card">
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="e.g. john@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              className="form-input"
              placeholder="e.g. 25"
              value={formData.age}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn-primary">
            Register User
          </button>
        </form>
      </section>

      <section className="card">
        <h2>Active Users</h2>
        <div className="table-container">
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
              </tr>
            </thead>

            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="3" className="empty-state">
                    No users have been added yet.
                  </td>
                </tr>
              ) : (
                users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}