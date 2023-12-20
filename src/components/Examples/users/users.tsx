// src/components/Users.js
import React, {  useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users {
      name
    }
  }
`;

function Users() {
  const { loading, error, data } = useQuery(GET_USERS);

  useEffect(() => {
    
  }, [data, loading, error]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching users: {error.message}</p>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.users.map((user : any) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
