import "./App.css";
import React from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Movielist from "./components/Movielist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourite from "./components/Favourite";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movielist />
            </>
          }
        />
        <Route path="/favourates" element={<Favourite />} />
      </Routes>
    </BrowserRouter>

    // <React.Fragment></React.Fragment>
  );
}

export default App;
