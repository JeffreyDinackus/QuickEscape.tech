import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

export default function Home(){
	async function sendCall(){
		console.log(JSON.stringify({
		    "collection": "records",
		    "database": "employees",
		    "dataSource": "quickexit",
		    "document": {
		        "text": "hello from the data api"
		    }}));
		console.log('https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/data-rwjpr/auth/providers/anon-user/login');
	
	const response = await fetch('https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/data-rwjpr/auth/providers/anon-user/login', {
           method: "POST",
           headers: {
             'Content-Type': 'application/json'
           },
   });
	response.json().then((res) => {
		console.log(res.access_token);
		console.log(res);
		fetch('https://us-east-1.aws.data.mongodb-api.com/app/data-rwjpr/endpoint/data/v1/action/insertOne', {
           method: "POST",
           body: JSON.stringify({
		    "collection": "records",
		    "database": "employees",
		    "dataSource": "quickexit",
		    "document": {
		        "text": "hey from the data api"
		    }}),
           headers: {
             'Content-Type': 'application/json',
  			 'Authorization': 'Bearer ' + res.access_token
           },
	});
	})
}
return (
	<div className="card w-1/2 bg-base-300 shadow-xl">
	<div className="card-body">
		<NavLink to="/newcall"><button onClick={() => {sendCall();}}className="btn btn-active btn-primary">Schedule a new call</button></NavLink>
		<NavLink to="scheduled"><button className="btn btn-active btn-primary">View Scheduled</button></NavLink>
	</div>
	</div>
	);
}