import React from "react";
import { Card, CardBody } from "@windmill/react-ui";

export default function StatsCard({ title, number }) {
	return (
		<Card>
			<CardBody>
				<p className="mb-4 font-semibold text-gray-600">Total {title}</p>
				<p className="text-gray-600 align-center">${number}</p>
			</CardBody>
		</Card>
	);
}
