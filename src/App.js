import React from 'react';
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import CausePage from './routes/CausePage'; // Change import to CausePage
import Team from "./routes/Team"
import Visualization from "./routes/Visualization";
import Prediction from "./routes/Prediction";
import Contact from "./routes/Contact";
import Glass from "./components/Glass";
import Visualize from './components/Visualize';
import Achievementts from "./routes/Achievementts";
import Navbar from './components/Navbar';
import Ngo from './routes/Ngo';
import Dp from './routes/Dp';


export default function App(){
  return(
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="ngop" element={<Ngo />} />
        <Route path="/About" element={<About />}/>
        <Route path="/cause" element={<CausePage />} /> {/* Change to CausePage */}
        <Route path="/achievements" element={<Achievementts />} />
        <Route path="/Our-team" element={<Team />} />
        <Route path="/visualization" element={<Visualization/>}/>
        <Route path="/visualize" element={<Visualize/>}/>
        <Route path="/prediction" element={<Prediction/>}/>
        <Route path="/glass" element={<Glass/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/form" element={<Dp/>}/>
      </Routes>
    </div>
  );
};
