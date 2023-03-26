import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function NavBar(props){
return (
    <div className="navbar bg-base-100 fixed">
  <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-xl">Quick Escape</a>
  </div>
  <div className="navbar-end">
    <div className="w-10 rounded-full">
          <img src={props.pic} />
        </div>
  </div>
</div>
  );
}