import './App.css'
import React from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Movielist from './components/Movielist';
import { BrowserRouter } from 'react-router-dom';
import Favourite from './components/Favourite';

function App() {
  return (
    
    <BrowserRouter>
         <Navbar/>
         <Banner/>
         <Movielist/>
         <Favourite/>
    </BrowserRouter>

    // <React.Fragment></React.Fragment>
  );
}

export default App;
