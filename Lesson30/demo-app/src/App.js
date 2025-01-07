import './App.css';
import { Button } from './components/Button';
import {useState} from 'react';

export function App() {
  const [currentPage, setCurrentPage] = useState('');

  function handleLogin () {
    setCurrentPage('login');
  };

  function handleRegister () {
    setCurrentPage('register');
  };


  // In react, we use JSX to define the structure of our components
  return (
    <div className='App'>
      <h1>Demo app</h1>
      <p>This is a demo react application.</p>
      <div className='row'>
        <Button label='Log in' handleClick={handleLogin}/>
        <Button label='Register' handleClick={handleRegister} />
      </div>

      {
        currentPage === 'login' && <p>Log in component</p>
      }

      {
        currentPage === 'register' && <p>Register component</p>
      }
      
    </div>
  );
}