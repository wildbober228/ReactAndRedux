import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Students from "./pages/Students";
import StudentsInfo from "./pages/StudentsInfo";

function App(props) {
  return (

        <Routes>
            <Route path="/" element={<Students/>} />
            <Route path="/info/:id" element= {<StudentsInfo />} />
        </Routes>

  );
}

export default App;
