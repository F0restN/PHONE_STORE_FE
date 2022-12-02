import API from "api/axios.config";

class OrderService {
  // products = {product_id: number of product, product_id: number of product}
  createOrder(amount, itemTotal, ref, paymentMethod, products) {
    return API.post("/orders/create", {
      amount,
      itemTotal,
      ref,
      paymentMethod,
      products
    });
  }
  getAllOrders(page) {
    return API.get(`/orders/?page=${page}`);
  }
  getOrder(id) {
    return API.get(`/orders/${id}`);
  }
}

export default new OrderService();
