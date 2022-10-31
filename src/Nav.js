import React from "react";


/* React DOM Router */
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Mongo from "./pages/mongo";
import Layout from "./pages/layout";



function main(){
  return (
    <div class='page-wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="mongo" element={<Mongo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}


export default main;
