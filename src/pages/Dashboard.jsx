import React, { useEffect, useState } from "react";
import StatsCard from "components/StatsCard";
import ChartCard from "components/ChartCard";
import RevenueOfProductsChart from "charts/RevenueOfProductsChart";
import RegionCompareChart from "charts/RegionCompareChart";
import DashboardService from "services/dashboard.service";
import TopCateChart from "charts/TopCateChart";
import BusinessCompareChart from "charts/BusinessCompareChart";

export default function Dashboard() {
	const [productSumPrice, setProductSumPrice] = useState();
	const [orderSum, setOrderSum] = useState([]);
	const [salesByBusiness, setSalesByBusiness] = useState([]);
	const [salesByRegion, setSalesByRegion] = useState([]);
	const [topCate, setTopCate] = useState([]);
	// border-solid border-2 border-indigo-600

	useEffect(() => {
		DashboardService.getOrderSum().then((res) => {
			setOrderSum(res.data.sum);
		});
		DashboardService.getProductSumPrice().then((res) => {
			setProductSumPrice(res.data);
		});
		DashboardService.getSalesByBusiness().then((res) =>
			setSalesByBusiness(res.data)
		);
		DashboardService.getSalesByRegion().then((res) =>
			setSalesByRegion(res.data)
		);
		DashboardService.getTopCate().then((res) => setTopCate(res.data));
	}, []);

	debugger;
	return (
		<div className="grid grid-cols-1 gap-4 bg-gray-100 p-4 max-length">
			<div className="p-3 text-3xl">Dashboard</div>
			<div className="grid grid-cols-4 gap-3">
				<StatsCard title={"Transaction Amount"} number={orderSum} />
				<StatsCard title={"Price"} number={2000} />
				<StatsCard title={"Price"} number={2000} />
				<StatsCard title={"Price"} number={2000} />
			</div>
			{/* row1 */}
			<div className="grid grid-cols-3 gap-4">
				<div className="col-span-2">
					<ChartCard title={"Products Sum price"}>
						<RevenueOfProductsChart data={productSumPrice} />
					</ChartCard>
				</div>
				<div className="col-span-1">
					<ChartCard title={"Sales By Region"}>
						<RegionCompareChart data={salesByRegion} />
					</ChartCard>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<div className="col-span-1">
					<ChartCard title={"Top Categories"}>
						<TopCateChart data={topCate} />
					</ChartCard>
				</div>
				<div className="col-span-1">
					<ChartCard title={"Sales By Business"}>
						<BusinessCompareChart data={salesByBusiness} />
					</ChartCard>
				</div>
			</div>
		</div>
	);
}
