import "@picocss/pico";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Show from "./components/Show";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows/:id" element={<Show />} />
      </Routes>
    </BrowserRouter>
  );
}
