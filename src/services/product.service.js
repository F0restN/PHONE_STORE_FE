import API from "api/axios.config";

class ProductService {
	getProducts(page, limit) {
		return API.get(`/products/?page=${page}`);
	}
	getProduct(id) {
		return API.get(`/products/${id}`);
	}
	getProductByName(name) {
		return API.get(`/products/${name}`);
	}
	async deleteProductById(id) {
		return await API.delete(`/products/${id}`);
	}
	async addProduct(prod) {
		return await API.post(`/products`, prod);
	}
}

export default new ProductService();
