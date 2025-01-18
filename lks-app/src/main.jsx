import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Create from "./Create.jsx";
import Homepage from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
      </Routes>
    </Router>
  </StrictMode>
);
