import React, { useState, useEffect } from "react";
import PropType from "prop-types";
import API from "api/axios.config";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import {
	Card,
	CardBody,
	Button,
	Input,
	Label,
	HelperText,
} from "@windmill/react-ui";
import PulseLoader from "react-spinners/PulseLoader";
import ProductService from "../services/product.service";

export default function AddProductModal() {
	// const [isModalOpen, setIsModalOpen] = useState(false);
	const history = useHistory();
	const { register, handleSubmit, setValue } = useForm();
	const [validationError, setValidationError] = useState();
	const [isSaving, setIsSaving] = useState(false);

	const onSubmit = async (data) => {
		console.log(data);
		setValidationError();
		setIsSaving(true);
		try {
			// await persist register
			await ProductService.addProduct(data);
			setIsSaving(false);
			toast.success("Product added");
			setTimeout(() => {
				window.location.reload();
			}, 1500);
		} catch (error) {
			setIsSaving(false);
			toast.error(error.response.data.message);
			setValidationError(error.response.data.message);
		}
	};

	const goToDashboard = () => {
		history.push("/dashboard");
	};

	return (
		<Card className="col-span-12">
			<CardBody>
				<form
					onSubmit={handleSubmit((data) => onSubmit(data))}
					className="border-t border-gray-200 grid grid-cols-1"
				>
					<Label className="bg-gray-50 px-4 py-5">
						<span className="text-sm font-medium text-gray-500 w-1/4">
							Category
						</span>
						<Input
							name="category"
							ref={register}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
						/>
					</Label>
					<Label className="bg-white px-4 py-5 ">
						<span className="text-sm font-medium text-gray-500">Name</span>
						<Input
							name="name"
							ref={register}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
						/>
						{validationError && (
							<HelperText valid={false}>{validationError.name}</HelperText>
						)}
					</Label>
					<div className="bg-gray-50 px-4 py-5 ">
						<span className="text-sm font-medium text-gray-500">price</span>
						<Input
							name="price"
							ref={register}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
						/>
						{validationError && (
							<HelperText valid={false}>{validationError.price}</HelperText>
						)}
					</div>
					<div className="bg-white px-4 py-5 ">
						<span className="text-sm font-medium text-gray-500">
							Description
						</span>
						<Input
							name="description"
							ref={register}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
						/>
					</div>
					<div className="bg-gray-50 px-4 py-5 ">
						<span className="text-sm font-medium text-gray-500">image_url</span>
						<Input
							name="image_url"
							ref={register}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
						/>
					</div>
					<div className="bg-white px-4 py-5 ">
						<span className="text-sm font-medium text-gray-500">inventory</span>
						<Input
							name="inventory"
							ref={register}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
						/>
					</div>
					<div className="bg-gray-50 px-4 py-5 ">
						<span className="text-sm font-medium text-gray-500">store_id</span>
						<Input
							name="store_id"
							ref={register}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
						/>
					</div>
					<div>
						<Button className="col-start-11 col-end-12 mt-4" type="submit">
							{isSaving ? (
								<PulseLoader color={"#0a138b"} size={10} loading={isSaving} />
							) : (
								"Save"
							)}
						</Button>
						<Button
							className="col-start-12 col-end-12 mt-4 ml-4 mr-4"
							onClick={goToDashboard}
						>
							Go To Dashboard
						</Button>
					</div>
				</form>
			</CardBody>
		</Card>
	);
}

AddProductModal.PropType = {
	isModalOpen: PropType.bool,
	closeModal: PropType.func,
};

AddProductModal.defaultProps = {
	isModalOpen: false,
};
