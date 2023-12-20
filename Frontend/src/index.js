
import ReactDOM from "react-dom/client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Students from "./pages/Students.jsx";
import Home from "./pages/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element = {<Home/>} />
          <Route path="/students" element={<Students/>} />
        </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

