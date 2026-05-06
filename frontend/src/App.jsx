import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllContacts from "./pages/AllContacts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllContacts />} />
      </Routes>
    </Router>
  );
}

export default App;