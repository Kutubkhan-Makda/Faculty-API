import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Faculty from "./Faculty";
import DetailFaculty from "./DetailFaculty";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Faculty/>}></Route>
          <Route path="/Faculty" element={<Faculty/>}></Route>
          <Route path="/DetailFaculty/:id" element={<DetailFaculty/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
