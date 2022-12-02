import React from "react";
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	Label,
	Input,
} from "@windmill/react-ui";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import productService from "services/product.service";
import toast from "react-hot-toast";

export default function AdjustInventory({ isModalOpen, closeModal, product }) {
	const [flag, setFlag] = useState(false);
	const { register, handleSubmit, setValue } = useForm();

	useEffect(() => {
		setFlag(isModalOpen);
	}, [isModalOpen]);

	const handleAdjust = async (data) => {
		const querDate = {
			...product,
			name: data.name.length > 0 ? data.name : product.name,
			inventory: data.inventory,
		};
		try {
			await productService.updateProduct(querDate);
			toast.success("Adjust product success");
			setTimeout(() => {
				window.location.reload();
			}, 1000);
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};

	return (
		<Modal isOpen={flag} onClose={closeModal}>
			<form
				onSubmit={handleSubmit((data) => handleAdjust(data))}
				className="border-t border-gray-200 grid grid-cols-1"
			>
				<ModalHeader>Modal header</ModalHeader>
				<ModalBody>
					<Label className="bg-gray-50 px-4 py-5">
						<span className="text-sm font-medium text-gray-500 w-1/4">
							Name
						</span>
						<Input
							name="name"
							ref={register}
							placeholder={product.name}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
						/>
					</Label>
					<Label className="bg-white px-4 py-5 ">
						<span className="text-sm font-medium text-gray-500">Inventory</span>
						<Input
							name="inventory"
							ref={register}
							placeholder={product.inventory}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
						/>
					</Label>
				</ModalBody>
				<ModalFooter>
					<Button
						className="w-full sm:w-auto"
						layout="outline"
						onClick={closeModal}
					>
						Cancel
					</Button>
					<Button className="w-full sm:w-auto" type="submit">
						Accept
					</Button>
				</ModalFooter>
			</form>
		</Modal>
	);
}
