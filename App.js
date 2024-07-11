import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App (){
  return(
    <div className='App'>
    <Navbar/>
    <Section/>
    <Footer/>
    </div>
  );
}

export default App;
