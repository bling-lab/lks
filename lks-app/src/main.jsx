import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import './index.css'
import Create from "./components/Create.jsx";
import Homepage from "./components/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </Router>
  </StrictMode>
);
