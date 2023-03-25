import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

import Home from "./components/home.js";
import Scheduled from "./components/scheduled.js";
import NewCall from "./components/newcall.js";
import NavBar from "./components/navbar.js";

const App = () => {
 return (
 	<>
 	<NavBar />
 	<div className="bg-gradient-to-br from-primary via-secondary to-accent h-screen max-w-full overflow-scroll grid place-items-center">
    <Routes>
       <Route exact path="/" element={<Home />} />
       <Route exact path="/scheduled" element={<Scheduled />} />
       <Route exact path="/newCall" element={<NewCall />} />
     </Routes>
    </div>
    </>
 );
};
 
export default App; 