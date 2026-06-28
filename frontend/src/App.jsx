import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Students from "./components/Students";
import Companies from "./components/Companies";
import Applications from "./components/Applications";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;