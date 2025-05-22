import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p> Welcome to my website! </p>
    </main>
  );
}

function About() {
  return <h1>About Page</h1>;
}

function Blog() {
  return (
    <h1>About Page</h1>;
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
