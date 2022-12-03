import React from "react";


/* React DOM Router */
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Mongo from "./pages/mongo";
import Layout from "./pages/layout";
import Register from "./pages/register";
import Teacher from "./pages/teacher";
import Student from "./pages/teacher";
import Quiz from "./pages/create-quiz"



function main(){
  return (
    <div className='page-wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="mongo" element={<Mongo />} />
          <Route path="register" element={<Register />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="student" element={<Student />} />
          <Route path="create-quiz" element={<Quiz />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}


export default main;
