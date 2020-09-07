/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Media from 'react-media';
import { push as Menu } from 'react-burger-menu'
import SideBar from './components/Sidebar';
import MobileNav from './components/MobileNav/MobileNav';
import AppContent from './components/AppContent';
import './App.scss';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/vincent-miller-2')
      .then(res => res.json())
      .then(json => {
        setUser(json);
      });
  }, []);

  if (!user) {
    return <div />
  }

  return (
      <Router>
        <div className="App">
          <div id="outer-container">
            <Menu pageWrapId="page-wrap" outerContainerId="outer-container" />
            <main id="page-wrap">
              <SideBar user={user} />
              <AppContent user={user} />
            </main>
          </div>
        </div>
      </Router>
  );
}

export default App;
