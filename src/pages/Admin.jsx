import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import authService from "services/auth.service";

export default function Admin() {
	const [valid, setValid] = useState(false);

	useEffect(() => {
		async function isValid() {
			const { data } = await authService.getCurrentUser();
			if (data.roles[0] === "admin") {
				setValid(true);
			}
			debugger;
		}
		isValid();
	}, []);

	return valid ? <div>Admin</div> : <div>Not valid</div>;
}
