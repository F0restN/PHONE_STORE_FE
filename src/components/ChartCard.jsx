import React from "react";
import { Card, CardBody } from "@windmill/react-ui";

export default function StatsCard(props) {
	return (
		<Card>
			<CardBody className="p-1">
				<p className="mb-5 font-semibold text-gray-600">Total {props.title}</p>
				{props.children}
			</CardBody>
		</Card>
	);
}
