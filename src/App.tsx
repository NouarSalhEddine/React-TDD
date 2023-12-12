import React from 'react';
import Skills from './components/Examples/skills/index';
import './App.css';


function App() { 
  const skillsData = ["younes", "khalil", "amani"];
  return (
    <div className="App">
      <header className="App-header">
        <Skills skills={skillsData} />
      </header>
    </div>
  );
}

export default App;
