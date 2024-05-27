import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello, would you like to add a contact to your contact list?</h1>
		
		<Link to={"/addContact"} href="#" className="btn btn-success">
			press here to add contacts
		</Link>
	</div>
);
