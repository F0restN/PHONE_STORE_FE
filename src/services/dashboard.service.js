import API from "api/axios.config";

class DashboardService {
	getProductSumPrice() {
		return API.get("/aggregation/productSumPrice");
	}

	getOrderSum() {
		return API.get("/aggregation/orderSum");
	}

	getSalesByBusiness() {
		return API.get("/aggregation/salesByBusiness");
	}

	getSalesByRegion() {
		return API.get("/aggregation/salesByRegion");
	}

	getTopCate() {
		return API.get("/aggregation/topCate");
	}
}

export default new DashboardService();
