import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import Students from "./pages/Students.jsx";
import Home from "./pages/Home.jsx";
import NewNote from "./pages/NewNote.jsx";
import Notes from "./pages/Notes.jsx";
import SingleNote from "./pages/SingleNote.jsx";
import EditNote from "./pages/EditNote";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/students" element={<Students/>}/>
        <Route path="/new-note" element={<NewNote/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/single-note/:id" element={<SingleNote/>}/>
        <Route path="/edit-note/:id" element={<EditNote/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

