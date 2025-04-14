import React from 'react';

const UserList = ({ users, deleteUser }) => {
  return (
    <div>
      {users.map((user, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '5px',
          }}
        >
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={() => deleteUser(user.email)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
