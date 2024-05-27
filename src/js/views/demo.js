import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { Card } from "../component/card.jsx";
import { FormController } from "../component/formController.jsx";
import { PopUp } from "../component/popUp.jsx";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<button onClick={() => setShow(!show)}>Add a contact to your list</button>
			
			<script>
  {function myFunction() {
    PopUp()
  }}
</script>
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li key={index}>
							<Card/>
						</li>
					);
				})}
			</ul>
			<br />
		</div>
	);
};
