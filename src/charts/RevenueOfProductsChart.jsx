import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/plots";
import propType from "prop-types";

const RevenueOfProductsChart = ({ data }) => {
	const config = {
		data,
		xField: "name",
		yField: "sum",
		label: {
			// 可手动配置 label 数据标签位置
			position: "bottom",
			// 'top', 'bottom', 'middle',
			// 配置样式
			style: {
				fill: "#FFFFFF",
				opacity: 0.6,
			},
		},
		xAxis: {
			label: {
				autoHide: true,
				autoRotate: false,
			},
		},
		meta: {
			type: {
				alias: "类别",
			},
			sales: {
				alias: "销售额",
			},
		},
	};
	return <Column {...config} />;
};

RevenueOfProductsChart.propType = {
	data: propType.array,
};

RevenueOfProductsChart.defaultProps = {
	data: [{ name: "default", sum: 0 }],
};

export default RevenueOfProductsChart;
