import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Card } from "../component/card.jsx";
import { FormController } from "../component/formController.jsx";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<Link onclick="myFunction()">Add a contact to your list</Link>
			<script>
  {function myFunction() {
    alert(<FormController/>)
  }}
</script>
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li>
							<Card/>
						</li>
					);
				})}
			</ul>
			<br />
		</div>
	);
};
