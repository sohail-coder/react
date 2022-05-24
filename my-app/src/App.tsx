import React from 'react';
import MultiActionAreaCard from './components/MultiActionAreaCard';
import Navbar from './components/Navbar';
import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar />
      <MultiActionAreaCard title='Welcome to Python ' author='Shaik Sohail' popularity='200k reads' read='10mins read' img="https://i.natgeofe.com/n/5506954d-6e0f-444c-aa83-a24adbe874e1/reptiles-hero_4x3.jpg"/>
      
    </div>
  );
}

export default App;
