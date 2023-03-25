import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function NavBar(){
return (
    <div className="navbar bg-base-100 fixed">
  <div className="navbar-start">
    <a className="btn btn-ghost normal-case text-xl">Quick Exit</a>
  </div>
  <div className="navbar-end">
    <a className="btn">Profile Placeholder</a>
  </div>
</div>
  );
}