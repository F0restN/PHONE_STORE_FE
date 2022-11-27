import React, { useState, useEffect } from "react";
import propType from "prop-types";
import { Bar } from "@ant-design/plots";

const TopCateChart = ({ data }) => {
	const config = {
		data,
		xField: "sum",
		yField: "category",
		seriesField: "category",
		legend: {
			position: "top-left",
		},
	};
	return <Bar {...config} />;
};

TopCateChart.propType = {
	data: propType.array,
};

TopCateChart.defaultProps = {
	data: [{ category: "default", sum: 0 }],
};

export default TopCateChart;
