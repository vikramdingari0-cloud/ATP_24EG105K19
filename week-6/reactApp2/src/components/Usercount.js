import React from "react";

function UserCount({ count }) {
  return (
    <div className="count-banner text-center">
      <h3 className="mb-0">Selected Users: {count}</h3>
      <p className="small mb-0 opacity-75">Click "Add User" on any card to increment the selection count.</p>
    </div>
  );
}

export default UserCount;