import './App.css';
import React from 'react';
import { Routes, Route} from "react-router-dom";
import { Header} from "../../components";
import { Home } from "../home";
import { About } from "../about";

export function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        <Header/>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

    </div>
  );
}
