import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Lessons from "./pages/Lessons.jsx";
import Home from "./pages/Home.jsx";
import Students from "./pages/Students.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/lessons" element={<Lessons/>} />
          <Route path="/students" element={<Students/>} />
        </Routes>
        </BrowserRouter>
    </React.StrictMode>
);