import React, { useState, useEffect } from "react";
import propType from "prop-types";
import { Pie } from "@ant-design/plots";

const BusinessCompareChart = ({ data }) => {
	debugger;
	const config = {
		appendPadding: 10,
		data,
		angleField: "sum",
		colorField: "business",
		radius: 1,
		innerRadius: 0.6,
		label: {
			type: "inner",
			offset: "-50%",
			content: "{value}",
			style: {
				textAlign: "center",
				fontSize: 14,
			},
		},
		interactions: [
			{
				type: "element-selected",
			},
			{
				type: "element-active",
			},
		],
		statistic: {
			title: false,
			content: {
				style: {
					whiteSpace: "pre-wrap",
					overflow: "hidden",
					textOverflow: "ellipsis",
				},
				content: "Buiness\nSales",
			},
		},
	};
	return <Pie {...config} />;
};

BusinessCompareChart.propType = {
	data: propType.array,
};

BusinessCompareChart.defaultProps = {
	data: [{ business: "default", sum: 0 }],
};

export default BusinessCompareChart;
