import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
const Row = (props) => (
 			<tr>
		        <td>{props.time}</td>
		        <td>{props.type}</td>
		      </tr>
  ); 
export default function Scheduled(props){
	const [calls, setCalls] = useState([]);
	const [items, setItems] = useState([]);
	const [access_token, setAccess_token] = useState('');
	useEffect(() => {
	async function getCalls(){
		
		const response = await fetch('https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/data-rwjpr/auth/providers/anon-user/login', {
	           method: "POST",
	           headers: {
	             'Content-Type': 'application/json'
	           },
	   });
		console.log(response);
		response.json().then((res) => {
			console.log(res.access_token);
			console.log(res);
			setAccess_token(res.access_token);
			
		});
	}
	getCalls();
	}, []);
	useEffect(() => {
		async function getCalls(){
			console.log(access_token);
			const response2 = await fetch('https://us-east-1.aws.data.mongodb-api.com/app/data-rwjpr/endpoint/data/v1/action/find', {
		           method: "POST",
		           body: JSON.stringify({
				    "collection": "calls",
				    "database": "quickexit",
				    "dataSource": "quickexit",
				    "filter": {
				       "userEmail": props.email
				     }
				    }),
		           headers: {
		             'Content-Type': 'application/json',
		  			 'Authorization': 'Bearer ' + access_token
		           },
				});
				response2.json().then((res2) => {
					console.log(res2.documents);
					setCalls(res2.documents);
				});
		}
		getCalls();
	}, [access_token]);
function callList(){
	if (calls){
		return calls.map((call) => {
		return (
			<Row type={call.callType} time={call.callTime}/>
			);
	});
	}
}
return (
		<div className="card w-1/2 bg-base-300 shadow-xl">
	<div className="card-body place-items-center">
		<div className="overflow-x-auto">
		  <table className="table">
		    <thead>
		      <tr>
		        <th>Time</th>
		        <th>Call/Text Type</th>
		      </tr>
		    </thead>
		    <tbody>
		      {callList()}
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