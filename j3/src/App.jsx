import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(true);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (email) => {
    setUsers(users.filter((user) => user.email !== email));
  };

  const toggleUsers = () => {
    setShowUsers(!showUsers);
  };

  return (
    <div style={{ padding: '2rem',marginLeft: "400px" }}>
      <h1>User Management Dashboard</h1>
      <UserForm addUser={addUser} />

      <button onClick={toggleUsers}>
        {showUsers ? 'Hide Users' : 'Show Users'}
      </button>

      {showUsers && (
        <>
          <p>Currently showing {users.length} user(s)</p>
          <UserList users={users} deleteUser={deleteUser} />
        </>
      )}
    </div>
  );
};

export default App;

