import React from "react";
import AddProductModal from "components/AddProductModal";
import AdminLayout from "layout/AdminLayout";

export default function AddProduct() {
	return (
		<AdminLayout currentPage="Add Prod">
			<div className="h-screen bg-gray-100">
				<div className="grid grid-col-12 p-4 gap-4">
					<div className="p-2 text-xl">Add product</div>
					<AddProductModal />
				</div>
			</div>
		</AdminLayout>
	);
}
