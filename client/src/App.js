import React, { useEffect } from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Home from "./components/home.js";
import Scheduled from "./components/scheduled.js";
import NewCall from "./components/newcall.js";
import NavBar from "./components/navbar.js";


const App = () => {
	const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
useEffect(() => {
    if (user) {
      console.log("logged in")
    } else if (isLoading) {
      console.log('loading');
    } else {
      loginWithRedirect();
    }
  }, user);

 return (
 	
 	isAuthenticated &&
 		<>
	 	<NavBar pic={user.picture}/>
	 	<div className="bg-gradient-to-br from-primary via-secondary to-accent h-screen max-w-full overflow-scroll grid place-items-center">
	    <Routes>
	       <Route exact path="/" element={<Home />} />
	       <Route exact path="/scheduled" element={<Scheduled email={user.email}/>} />
	       <Route exact path="/newCall" element={<NewCall email={user.email}/>} />
	     </Routes>
	    </div>
	    </>
 );
};
 
export default App; 