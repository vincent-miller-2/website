/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from './components/Sidebar';
import AppContent from './components/AppContent';
import './App.scss';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/vincent-miller-2')
      .then((res) => res.json())
      .then((json) => {
        setUser(json);
      });
  }, []);

  if (!user) {
    return <div />;
  }

  return (
    <Router>
      <div className="App">
        <div id="outer-container">
          <SideBar user={user} />
          <div id="page-wrap">
            <AppContent user={user} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
