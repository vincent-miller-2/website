import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.scss';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/vincent-miller-2')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setUser(json);
      });
  }, []);

  if (!user) {
    return <div />
  }

  return (
    <div className="App">
      <Header user={user} />
    </div>
  );
}

export default App;
