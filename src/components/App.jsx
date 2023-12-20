import { useState } from "react";
import NavBar from "./NavBar";
import {Routes, Route } from "react-router-dom";
import LinkList from "./LinkList";
import CreateLink from "./CreateLink";
import Login from "./Login";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<LinkList/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/create" element={<CreateLink/>}/>
      </Routes>
    </>
  );
}

export default App;
