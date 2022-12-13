import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
	Table,
	TableHeader,
	TableRow,
	TableFooter,
	TableCell,
	TableBody,
	TableContainer,
	Badge,
	Pagination,
	Button,
	Card,
	CardBody,
} from "@windmill/react-ui";
import toast from "react-hot-toast";
import productService from "services/product.service";
import AddProductModal from "components/AddProductModal";
import { useHistory } from "react-router-dom";
import Layout from "layout/Layout";
import { useProduct } from "context/ProductContext";
import { useUser } from "context/UserContext";
import AdjustInventory from "components/AdjustInventory";
import AdminLayout from "layout/AdminLayout";

export default function AdjustProduct() {
	const [valid, setValid] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { products, setProducts, setPage } = useProduct();
	const { userData } = useUser();
	const [currProd, setCurrProd] = useState({});

	useEffect(() => {
		if (userData && userData.roles.includes("admin")) {
			setValid(true);
		}
	}, [userData]);

	const handleProductRemove = (prod) => {
		const data = products.filter((index, ele, arr) => {
			return ele.product_id != prod.product_id;
		});
		productService.deleteProductById(prod.product_id).then((res) => {
			setProducts(data);
			toast.success(`Successfully delete product ${res.data.name}`);
			setTimeout(() => {
				window.location.reload();
			}, 1600);
		});
	};

	const handleChange = (page) => {
		setPage(page);
		window.scrollTo({ behavior: "smooth", top: 0 });
	};

	const handleAdjustInventory = (prod) => {
		setIsModalOpen(true);
		setCurrProd(prod);
	};

	return (
		<AdminLayout currentPage="Adjust Prod">
			<div className="h-screen bg-gray-100">
				<div className="grid grid-col-12 p-4 gap-4">
					<div className="p-2 text-xl">Remove product</div>
					<Card className="col-span-12">
						<CardBody>
							<TableContainer className="col-span-12">
								<Table>
									<TableHeader>
										<TableRow>
											<TableCell>Procduct Name</TableCell>
											<TableCell>Price</TableCell>
											<TableCell>Status</TableCell>
											<TableCell>Inventory</TableCell>
											<TableCell>Actions</TableCell>
										</TableRow>
									</TableHeader>
									<TableBody>
										{products?.map((prod) => (
											<TableRow key={prod.product_id}>
												<TableCell>
													<div className="flex items-center text-sm">
														<span className="font-semibold ml-2">
															{prod.name}
														</span>
													</div>
												</TableCell>
												<TableCell>
													<span className="text-sm">${prod.price}</span>
												</TableCell>
												<TableCell>
													<Badge type="success">success</Badge>
												</TableCell>
												<TableCell>
													<span className="font-semibold ml-2">
														{prod.inventory}
													</span>
												</TableCell>
												<TableCell>
													<Button
														className="mr-2"
														layout="outline"
														value={prod}
														onClick={() => {
															handleProductRemove(prod);
														}}
													>
														Remove
													</Button>
													<Button
														layout="primary"
														value={prod}
														onClick={() => {
															handleAdjustInventory(prod);
														}}
													>
														Adjust
													</Button>
												</TableCell>
											</TableRow>
										))}
										{/* {displayProductRows()} */}
									</TableBody>
								</Table>
								<TableFooter>
									<Pagination
										totalResults={products ? products.length : 0}
										resultsPerPage={10}
										onChange={handleChange}
										label="Page navigation"
									/>
								</TableFooter>
							</TableContainer>
						</CardBody>
					</Card>
					<AdjustInventory
						isModalOpen={isModalOpen}
						closeModal={() => setIsModalOpen(false)}
						product={currProd}
					/>
				</div>
			</div>
		</AdminLayout>
	);
}
