import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Media from 'react-media';
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
        <Media query="(min-width: 576px)" render={() =>
          (
            <>
              <SideBar user={user} />
              <AppContent user={user} />
            </>
          )}
        />
        <Media query="(max-width: 575px)" render={() =>
          (
            <MobileNav user={user} />
          )}
        />
      </div>
    </Router>
  );
}

export default App;
