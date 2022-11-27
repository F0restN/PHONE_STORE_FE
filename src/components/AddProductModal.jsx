import React from "react";
import PropType from "prop-types";
import {
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
} from "@windmill/react-ui";
import { useState } from "react";

export default function AddProductModal({ isModalOpen, closeModal }) {
	// const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<Modal isOpen={isModalOpen} onClose={closeModal}>
			<ModalHeader>Add Product</ModalHeader>
			<ModalBody>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et
				eligendi repudiandae voluptatem tempore!
				{/* <AddProductForm /> */}
			</ModalBody>
			<ModalFooter>
				<Button
					className="w-full sm:w-auto"
					layout="outline"
					onClick={closeModal}
				>
					Cancel
				</Button>
				<Button className="w-full sm:w-auto">Submit</Button>
			</ModalFooter>
		</Modal>
	);
}

AddProductModal.PropType = {
	isModalOpen: PropType.bool,
	closeModal: PropType.func,
};

AddProductModal.defaultProps = {
	isModalOpen: false,
};
