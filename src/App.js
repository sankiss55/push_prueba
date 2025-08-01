// src/App.js
import React, { useEffect } from 'react';
import { requestPermission, onMessageListener } from './firebase';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    requestPermission();

    onMessageListener().then(payload => {
      console.log("Mensaje recibido en foreground: ", payload);
      alert(payload.notification.title + ": " + payload.notification.body);
    }).catch(err => console.log('Error: ', err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Notificaciones push configuradas</p>
      </header>
    </div>
  );
}

export default App;
