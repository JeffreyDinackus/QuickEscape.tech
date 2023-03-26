import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

export default function NewCall(props){
	const [callTime, setCallTime] = useState("");
	const [callType, setCallType] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	async function sendCall(){
	const response = await fetch('https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/data-rwjpr/auth/providers/anon-user/login', {
           method: "POST",
           headers: {
             'Content-Type': 'application/json'
           },
   });
	response.json().then((res) => {
		console.log(res.access_token);
		console.log(callTime*60000);
		console.log(Date.now());
		console.log(Date.now() + (callTime*60000));
		console.log(res);
		fetch('https://us-east-1.aws.data.mongodb-api.com/app/data-rwjpr/endpoint/data/v1/action/insertOne', {
           method: "POST",
           body: JSON.stringify({
		    "collection": "calls",
		    "database": "quickexit",
		    "dataSource": "quickexit",
		    "document": {
		        "userEmail": props.email,
		        "callTime": (Date.now() + (callTime*60000)),
		        "callType": callType,
		        "phoneNumber": phoneNumber,
		        "completed": "false"
		    }}),
           headers: {
             'Content-Type': 'application/json',
  			 'Authorization': 'Bearer ' + res.access_token
           },
	});
	})
}
return (
	<>
		<div className="card w-1/2 bg-base-300 shadow-xl">
	<div className="card-body place-items-center">
	<select className="select select-primary w-full max-w-xs" onChange={(e) => setCallTime(e.target.value)}>
		  <option disabled selected>What time call placed?</option>
		  <option value="5">5 mins</option>
		  <option value="10">10 mins</option>
		  <option value="15">15 mins</option>
		  <option value="20">20 mins</option>
		  <option value="25">25 mins</option>
		  <option value="30">30 mins</option>
		  <option value="35">35 mins</option>
		  <option value="40">40 mins</option>
		  <option value="45">45 mins</option>
		  <option value="50">50 mins</option>
		  <option value="55">55 mins</option>
		  <option value="60">1 hour</option>
		  <option value="65">1 hour 5 mins</option>
		</select>
	<select className="select select-primary w-full max-w-xs" onChange={(e) => setCallType(e.target.value)}>
		  <option disabled selected>What type of call and text?</option>
		  <option>Angry dad</option>
		  <option>Pulled over friend</option>
		</select>
		<input type="text" placeholder="Insert phone number" className="input input-primary input-bordered w-full max-w-xs" onChange={(e) => setPhoneNumber(e.target.value)} />
		<div className="card-actions justify-end">
      <NavLink to="/"><button className="btn btn-error">Cancel</button></NavLink><NavLink to="/"><button className="btn btn-primary" onClick={() => sendCall()}>Schedule</button></NavLink>
    </div>
	</div>
	</div>
	</>
	);
}