import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Students from "./pages/Students.jsx";
import NewNote from "./pages/NewNote.jsx";
import Notes from "./pages/Notes.jsx";
import SingleNote from "./pages/SingleNote.jsx";
import EditNote from "./pages/EditNote";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Speakers from "./pages/Speakers.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/speakers" element={<Speakers/>}/>
        <Route path="/students" element={<Students/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/new-note" element={<NewNote/>}/>
        <Route path="/single-note/:id" element={<SingleNote/>}/>
        <Route path="/edit-note/:id" element={<EditNote/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </div>
);
