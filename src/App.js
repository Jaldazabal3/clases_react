import { useState } from 'react';
import './App.css';
import Home from './Home';
import Profile from './Profile';

function App() {
  
  const [page, setPage] = useState('Home');

  return (
    <>
      <div>
        <button onClick={() => setPage('Home')}>Go To Home</button>
        <button onClick={() => setPage('Profile')}>Go To Profile</button>
      </div>
      { page === 'Home'  && <Home />}
      { page === 'Profile'  && <Profile />}
    </>
  );
}

export default App;
