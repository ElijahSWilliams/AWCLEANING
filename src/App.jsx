import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Services from "./Services/Services.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        {/* Floating Background Shapes */}
        <div className="