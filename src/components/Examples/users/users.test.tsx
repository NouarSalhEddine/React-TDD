import React from 'react';
import { render , screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Users, { GET_USERS } from './users';

describe('Users', () => {
  test('renders users correctly', async () => {
    const mocks = [
      {
        request: {
          query: GET_USERS,
        },
        result: {
          data: {
            users: [
              { id: 1, name: 'benmoussa younes' },
              { id: 2, name: 'senoussi aboubakr' },
            ],
          },
        },
      },
    ];

    render(
      <MockedProvider mocks={mocks} >
        <Users />
      </MockedProvider>
    );

    const listElement = await screen.findAllByRole('listitem');
    expect(listElement).toHaveLength(2);
  });



  test('renders error state', async () => {
    const mocks = [
      {
        request: {
          query: GET_USERS,
        },
        error: new Error('An error occurred'),
      },
    ];

    render(
      <MockedProvider mocks={mocks} >
        <Users />
      </MockedProvider>
    );

    const errorElement = await screen.findByText(/error/i);
    expect(errorElement).toBeInTheDocument();
  });
});