import React from "react";


/* React DOM Router */
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Logout from "./pages/logout";
import Test from "./pages/test"; //This is the testing page, not the actual quiz page
import Layout from "./pages/layout";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Creator from "./pages/quiz_creator";
import Exam from "./pages/exam";

// Directs movement between pages
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
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="logout" element={<Logout />} />
          <Route path="quiz-creator" element={<Creator />} />
          <Route path="exam" element={<Exam />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}


export default main;