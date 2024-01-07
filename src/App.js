import React from "react";
import Login from "./Components/LoginPage/Login";
import Signup from "./Components/SignUpPage/Signup";
import Home from "./Components/HomePage/Home";
import { Routes, Route } from "react-router-dom";

const App=()=> {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
