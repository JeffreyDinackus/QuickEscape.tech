import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

export default function Scheduled(props){
return (
		<div className="card w-1/2 bg-base-300 shadow-xl">
	<div className="card-body place-items-center">
		<div className="overflow-x-auto">
		  <table className="table">
		    <thead>
		      <tr>
		        <th>Time</th>
		        <th>Call/Text Type</th>
		        <th> </th>
		      </tr>
		    </thead>
		    <tbody>
		      <tr>
		        <td>10:05 pm</td>
		        <td>Angry dad</td>
		        <td><button className="btn btn-error">Cancel</button></td>
		      </tr>
		    </tbody>
		  </table>
		</div>
		<div className="card-actions justify-end">
      <NavLink to="/"><button className="btn btn-primary">Return Home</button></NavLink>
    </div>
			</div>
			</div>
	);
}