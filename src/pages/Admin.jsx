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
	Input,
} from "@windmill/react-ui";
import { useProduct } from "context/ProductContext";
import authService from "services/auth.service";
import productService from "services/product.service";

export default function Admin() {
	const [valid, setValid] = useState(false);
	const { products, setProducts, setPage } = useProduct();

	useEffect(() => {
		async function isValid() {
			const { data } = await authService.getCurrentUser();
			if (data.roles[0] === "admin") {
				setValid(true);
			}
		}
		isValid();
	}, [valid]);

	const handleProductRemove = (prod) => {
		const data = products.filter((index, ele, arr) => {
			return ele.product_id != prod.product_id;
		});
		setProducts(data);
		productService
			.deleteProductById(prod.product_id)
			.then((res) => console.log(res));
		debugger;
	};

	const handleChange = (page) => {
		setPage(page);
		window.scrollTo({ behavior: "smooth", top: 0 });
	};

	return valid ? (
		<TableContainer>
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
					totalResults={20}
					resultsPerPage={12}
					onChange={handleChange}
					label="Page navigation"
				/>
			</TableFooter>
			<Button>Add</Button>
		</TableContainer>
	) : (
		<div>Not valid</div>
	);
}
