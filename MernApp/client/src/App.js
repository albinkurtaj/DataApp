import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout1 from "./components/main";
import Input from "./components/input";

import Hello from "./components/Hello";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout1 />}>
            <Route index element={<Hello />} />
            <Route path="input" element={<Input />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
