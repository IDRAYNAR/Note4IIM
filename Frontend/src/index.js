import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import "./index.css";
import './dist/styles/main.css';
import Home from "./pages/Home.jsx";
import Students from "./pages/Students.jsx";
import NewNote from "./pages/NewNote.jsx";
import Notes from "./pages/Notes.jsx";
import SingleNote from "./pages/SingleNote.jsx";
import EditNote from "./pages/EditNote";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Speakers from "./pages/Speakers.jsx";
import Header from "./components/nav/Header.jsx";
import Layout from "./components/Layout"

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <React.StrictMode>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home"/>}/>
          <Route path="/home" element={<Layout><Home/></Layout>}/>
          <Route path="/speakers" element={<Layout><Speakers/></Layout>}/>
          <Route path="/students" element={<Layout><Students/></Layout>}/>
          <Route path="/notes" element={<Layout><Notes/></Layout>}/>
          <Route path="/new-note" element={<Layout><NewNote/></Layout>}/>
          <Route path="/single-note/:id" element={<Layout><SingleNote/></Layout>}/>
          <Route path="/edit-note/:id" element={<Layout><EditNote/></Layout>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);