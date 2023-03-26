import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

export default function Home(){
return (
	<div className="card w-1/2 bg-base-300 shadow-xl">
	<div className="card-body place-items-center">
		<NavLink to="/newcall"><button className="btn btn-active btn-primary">Schedule a new call</button></NavLink>
		<NavLink to="scheduled"><button className="btn btn-active btn-primary">View Scheduled</button></NavLink>
	</div>
	</div>
	);
}