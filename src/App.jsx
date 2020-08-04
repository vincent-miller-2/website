import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import PageHeader from './components/PageHeader';
import SideBar from './components/Sidebar';
import About from './components/About';
import Work from './components/Work';
import Education from './components/Education';
import Footer from './components/Footer';
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
        <SideBar user={user} />
        <PageHeader />
        <Switch>
          <Route exact path='/' render={() => <About user={user} />} />
          <Route path='/work' render={() => <Work work={user.work} />} />
          <Route path='/education' render={() => <Education education={user.education} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
