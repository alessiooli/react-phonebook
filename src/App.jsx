import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { Image, Icon } from "semantic-ui-react";

export default function App() {
  return (
    <div className="main">
      <Image src="/telephone-call.png" size="mini" />
      <h2 className="main-header">React PhoneBook</h2>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/create" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/update" element={<Update />} />
      </Routes>
      <div className="credits-container">
        <h3 className="credits">
          <Icon name="computer" color="blue" className="computer-icon" />
          Development and Design by Alessio Olimpio
        </h3>
        <h4>
          <a
            href="https://www.linkedin.com/in/alessioolimpio/"
            style={{ textDecoration: "underline" }}
          >
            Linkedin
          </a>
        </h4>
        <h4>
          <a
            href="https://github.com/alessiooli"
            style={{ textDecoration: "underline" }}
          >
            Github
          </a>
        </h4>
      </div>
    </div>
  );
}
