import React, { useState, useEffect } from "react";
import { Pie } from "@ant-design/plots";
import pt from "prop-types";

const RegionCompareChart = ({ data }) => {
	const config = {
		appendPadding: 10,
		data,
		angleField: "sum",
		colorField: "region_id",
		radius: 0.9,
		label: {
			type: "inner",
			offset: "-30%",
			content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
			style: {
				fontSize: 14,
				textAlign: "center",
			},
		},
		legend: {
			position: "bottom",
		},
		interactions: [
			{
				type: "element-active",
			},
		],
	};
	return <Pie {...config} />;
};

RegionCompareChart.propTypes = {
	data: pt.array,
};

RegionCompareChart.defaultProps = {
	data: [{ region_id: 0, sum: 0 }],
};

export default RegionCompareChart;
