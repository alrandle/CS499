import React from "react";


/* React DOM Router */
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Test from "./pages/test";
import Layout from "./pages/layout";
import Register from "./pages/register";
import Teacher from "./pages/teacher";
import Student from "./pages/student";
import Creator from "./pages/quiz_creator"

function main(){
  return (
    <div className='page-wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="test" element={<Test />} />
          <Route path="register" element={<Register />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="student" element={<Student />} />
          <Route path="quiz-creator" element={<Creator />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}


export default main;