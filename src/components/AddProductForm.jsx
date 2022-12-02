import { Button, HelperText, Input, Label } from "@windmill/react-ui";
import { useUser } from "context/UserContext";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PulseLoader from "react-spinners/PulseLoader";

const AddProductForm = ({
	product,
	handleSubmit,
	onSubmit,
	validationError,
}) => {
	// const { product, handleSubmit, setValue } = useForm();
	// const [validationError, setValidationError] = useState();
	// const [isSaving, setIsSaving] = useState(false);

	return (
		<section className="grid overflow-auto">
			<div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="border-t border-gray-200 grid grid-cols-1"
				>
					<Label className="bg-gray-50 px-4 py-5">
						<span className="text-sm font-medium text-gray-500 w-1/4">
							category
						</span>
						<Input
							name="category"
							ref={product}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
						/>
					</Label>
					<Label className="bg-white px-4 py-5 ">
						<span className="text-sm font-medium text-gray-500">Name</span>
						<Input
							name="name"
							ref={product}
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
							ref={product}
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
							ref={product}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
						/>
					</div>
					<div className="bg-gray-50 px-4 py-5 ">
						<span className="text-sm font-medium text-gray-500">iamge_url</span>
						<Input
							name="iamge_url"
							ref={product}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
						/>
					</div>
					<div className="bg-white px-4 py-5 ">
						<span className="text-sm font-medium text-gray-500">inventory</span>
						<Input
							name="inventory"
							ref={product}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
						/>
					</div>
					<div className="bg-gray-50 px-4 py-5 ">
						<span className="text-sm font-medium text-gray-500">store_id</span>
						<Input
							name="store_id"
							ref={product}
							className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
						/>
					</div>
					{/* <div className="px-4 py-5 space-x-4">
						<Button disabled={isSaving} type="submit">
							{isSaving ? (
								<PulseLoader color={"#0a138b"} size={10} loading={isSaving} />
							) : (
								"Save"
							)}
						</Button>
						<Button
							disabled={isSaving}
							onClick={() => setShowSettings(false)}
							layout="outline"
						>
							Cancel
						</Button>
					</div> */}
				</form>
			</div>
		</section>
	);
};

export default AddProductForm;
