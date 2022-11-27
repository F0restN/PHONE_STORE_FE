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
} from "@windmill/react-ui";
import toast from "react-hot-toast";
// import authService from "services/auth.service";
import productService from "services/product.service";
import AddProductModal from "components/AddProductModal";
import { useHistory } from "react-router-dom";
import Layout from "layout/Layout";
import { useProduct } from "context/ProductContext";
import { useUser } from "context/UserContext";

export default function Admin() {
	const history = useHistory();

	const [valid, setValid] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const { products, setProducts, setPage } = useProduct();
	const { userData } = useUser();

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
		});
	};

	const handleChange = (page) => {
		setPage(page);
		window.scrollTo({ behavior: "smooth", top: 0 });
	};

	const openModal = () => {
		setIsModalOpen(() => {
			setIsModalOpen(true);
		});
	};

	const goToDashboard = () => {
		history.push("/dashboard");
	};

	return valid ? (
		<div className="grid grid-col-12">
			<TableContainer className="col-span-12">
				<Table>
					<TableHeader>
						<TableRow>
							<TableCell>Procduct Name</TableCell>
							<TableCell>Price</TableCell>
							<TableCell>Status</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					</TableHeader>
					<TableBody>
						{products?.map((prod) => (
							<TableRow key={prod.product_id}>
								<TableCell>
									<div className="flex items-center text-sm">
										<span className="font-semibold ml-2">{prod.name}</span>
									</div>
								</TableCell>
								<TableCell>
									<span className="text-sm">${prod.price}</span>
								</TableCell>
								<TableCell>
									<Badge type="success">success</Badge>
								</TableCell>
								<TableCell>
									<Button
										value={prod}
										onClick={() => {
											handleProductRemove(prod);
										}}
									>
										Remove
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
			<Button className="col-start-11 col-end-12 mt-4" onClick={openModal}>
				Add
			</Button>
			<Button
				className="col-start-12 col-end-12 mt-4 ml-4 mr-4"
				onClick={goToDashboard}
			>
				Go To Dashboard
			</Button>
			<AddProductModal
				isModalOpen={isModalOpen}
				closeModal={() => {
					setIsModalOpen(false);
				}}
			/>
		</div>
	) : (
		<div>Not valid</div>
	);
}
