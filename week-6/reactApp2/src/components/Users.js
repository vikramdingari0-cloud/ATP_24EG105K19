import React, { useEffect, useState } from "react";

function Users({ onAddUser }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-5"><h4>Loading Users...</h4></div>;
  }

  return (
    <div className="row">
      {users.map((user) => (
        <div className="col-lg-4 col-md-6 mb-4" key={user.id}>
          <div className="card user-card h-100 p-4">
            <div className="user-avatar">
              {user.name.charAt(0)}
            </div>
            <h5 className="mb-1">{user.name}</h5>
            <p className="text-muted small mb-3">{user.email}</p>
            
            <div className="mt-auto">
              <button
                className="btn btn-primary w-100 btn-add"
                onClick={onAddUser}
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;