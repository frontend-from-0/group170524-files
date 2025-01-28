import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {UserProvider} from './UserContext';

const loggedInUser = {
  id: '2ec3b671-92fc-4009-a39e-2e39bacffef8',
  name: 'John Doe',
  email: 'john@gmail.com',
  likedQuotes: [],
  dislikedQuotes: []
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider initialValue={loggedInUser}>
      <App />
    </UserProvider>
  </React.StrictMode>
);
