import React, { useEffect, useState } from "react";
import StatsCard from "components/StatsCard";
import ChartCard from "components/ChartCard";
import RevenueOfProductsChart from "charts/RevenueOfProductsChart";
import RegionCompareChart from "charts/RegionCompareChart";

export default function Dashboard() {
	// border-solid border-2 border-indigo-600
	useEffect(() => {}, []);

	return (
		<div className="grid grid-cols-1 gap-4 bg-gray-100 p-4 max-length">
			<div className="p-3 text-3xl">Dashboard</div>
			<div className="grid grid-cols-4 gap-3">
				<StatsCard title={"Price"} number={2000} />
				<StatsCard title={"Price"} number={2000} />
				<StatsCard title={"Price"} number={2000} />
				<StatsCard title={"Price"} number={2000} />
			</div>
			{/* row1 */}
			<div className="grid grid-cols-3 gap-4">
				<div className="col-span-2">
					<ChartCard title={"Total sells price for different products"}>
						<RevenueOfProductsChart />
					</ChartCard>
				</div>
				<div className="col-span-1">
					<ChartCard title={"Region sell compare"}>
						<RegionCompareChart />
					</ChartCard>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<div className="col-span-1">
					<ChartCard title={"Total sells price for different products"}>
						<RevenueOfProductsChart />
					</ChartCard>
				</div>
				<div className="col-span-1">
					<ChartCard title={"Chart"}>
						<RevenueOfProductsChart />
					</ChartCard>
				</div>
			</div>
		</div>
	);
}
