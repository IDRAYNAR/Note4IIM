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
import Profile  from "./pages/Profil.jsx";
import axios from "axios";

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
          <Route path="/profil" element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </div>
);

var data = JSON.stringify({
    "collection": "Lessons",
    "database": "Note4IIM_Data",
    "dataSource": "ClusterNoteIIM",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://eu-central-1.aws.data.mongodb-api.com/app/data-azgpq/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'uTqnkTiYPHsR0azbCd2U4VucDd8kcltHq4MFpnwPgZ732FzhNRUDsLIPCeIDLenB',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
