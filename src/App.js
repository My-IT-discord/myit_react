import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Home from "./routes/Home";
import Aboutus from "./routes/Aboutus";
import Blogs from "./routes/Blogs";
import Nav from "./components/Nav";
import What_is_osi_7 from "./components/posts/what_is_osi7";
import Difference_between_l2_and_l3_switch from "./components/posts/difference_between_l2_and_l3_switch";
import "./App.css";
import "./style.css";
//import Modes from "./components/modes";
//src\components\posts\difference_between_l2_and_l3_switch.jsx
export default function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blogs/:title" element={<Blogs />} />
          <Route path="aboutus/" element={<Aboutus />} />
          <Route path="blogs/what_is_osi_7" element={<What_is_osi_7 />} />
          <Route path="blogs/difference_between_l2_and_l3_switch" element={<Difference_between_l2_and_l3_switch />} />
        </Routes>
      </Router>
   </div>
  );
}
