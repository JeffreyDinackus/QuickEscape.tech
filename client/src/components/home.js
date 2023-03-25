import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Home(){
return (
	<div className="card w-96 bg-base-100 shadow-xl">
	<div className="card-body">
		<button className="btn btn-active btn-primary">Schedule a new call</button>
		<button className="btn btn-active btn-primary">View Scheduled</button>
	</div>
	</div>
	);
}