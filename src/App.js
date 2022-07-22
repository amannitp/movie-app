import './App.css'
import React from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Movielist from './components/Movielist';


function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Movielist/>
    </>

    // <React.Fragment></React.Fragment>
  );
}

export default App;
