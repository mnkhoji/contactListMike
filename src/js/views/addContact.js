import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "../component/card.jsx";
import { NewUser } from "../component/newUser.jsx";
import { FormController } from "../component/formController.jsx";

export const AddContact = () => (
	<div className="text-center mt-5">
		<h1>this is the add contact page </h1>
		
		<FormController/>
	</div>
);

