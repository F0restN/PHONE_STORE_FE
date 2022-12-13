/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useUser } from "context/UserContext";
import { Link } from "react-router-dom";

const user = {
	name: "AdminUser",
	email: "admin@pitt.edu",
	imageUrl:
		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
	{ name: "Dashboard", href: "/dashboard", current: false },
	{ name: "Adjust Prod", href: "/adjust-product", current: false },
	{ name: "Add Prod", href: "/add-product", current: true },
	{ name: "Store", href: "/", current: false },
];
const userNavigation = [{ name: "Sign out", href: "#" }];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function AdminLayout({ children, currentPage }) {
	const [valid, setValid] = useState(false);
	const { userData, logout } = useUser();

	useEffect(() => {
		for (let i = 0; i < navigation.length; i++) {
			let obj = navigation[i];
			if (obj.name === currentPage) {
				obj.current = true;
			} else {
				obj.current = false;
			}
		}
	}, [currentPage]);

	useEffect(() => {
		if (userData && userData.roles.includes("admin")) {
			setValid(true);
		}
	}, [setValid, userData]);

	return valid ? (
		<>
			<div className="h-full">
				<Disclosure as="nav" className="bg-gray-800">
					<div className="mx-auto px-8">
						<div className="flex h-16 items-center justify-between">
							<div className="flex items-center">
								<div className="flex-shrink-0">
									<img
										className="h-8 w-8"
										src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
										alt="Your Company"
									/>
								</div>
								<div className="hidden md:block">
									<div className="ml-10 flex items-baseline space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													item.current
														? "bg-gray-900 text-white"
														: "text-gray-300 hover:bg-gray-700 hover:text-white",
													"px-3 py-2 rounded-md text-sm font-medium"
												)}
												aria-current={item.current ? "page" : undefined}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
							<div className="hidden md:block">
								<div className="ml-4 flex items-center md:ml-6">
									{/* Profile dropdown */}
									<Menu as="div" className="relative ml-3">
										<div>
											<Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
												<span className="sr-only">Open user menu</span>
												<img
													className="h-8 w-8 rounded-full"
													src={user.imageUrl}
													alt=""
												/>
											</Menu.Button>
										</div>
										<Transition
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
												{userNavigation.map((item) => (
													<Menu.Item key={item.name}>
														{({ active }) => (
															<Link
																className="w-full"
																onClick={() => logout()}
																to="/login"
															>
																<div
																	// href={item.href}
																	block
																	className={classNames(
																		active ? "bg-gray-100" : "",
																		"block px-4 py-2 text-sm text-gray-700"
																	)}
																>
																	{item.name}
																</div>
															</Link>
														)}
													</Menu.Item>
												))}
											</Menu.Items>
										</Transition>
									</Menu>
								</div>
							</div>
						</div>
					</div>
				</Disclosure>

				<main>
					<div className="mx-auto">{children}</div>
				</main>
			</div>
		</>
	) : (
		<></>
	);
}
