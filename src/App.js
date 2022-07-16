import { useState } from 'react';
import './App.css';
import Home from './Home';
import Profile from './Profile';

function App() {
  
  const [paginaMostrada, setPaginaMostrada] = useState('Home'); // ---> ['estado', function (setea el estado)]

  // function paginaAMostrar() {
  //   if (paginaMostrada === 'Home') {
  //     return <Home />;
  //   } else if (paginaMostrada === 'Profile') {
  //     return <Profile />
  //   }
  // }

  // const edad = 10;
  //const resultado =  edad >= 18 ? 'Adulto' : 'No adulto'; //Ternario

  return (
    <>
      <div>
        <button onClick={() => setPaginaMostrada('Home')}>Go to Home</button>
        <button onClick={() => setPaginaMostrada('Profile')}>Go to Profile</button>
      </div>
      {paginaMostrada === 'Home' && <Home /> }

      {paginaMostrada === 'Profile' && <Profile /> }
    </>
  );
}

export default App;
