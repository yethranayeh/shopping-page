/** @format */

import "./styles/App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ColorSchemeProvider, Divider, MantineProvider, Paper } from "@mantine/core";
import { useLocalStorageValue } from "@mantine/hooks";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";

export default function App() {
	const [colorScheme, setColorScheme] = useLocalStorageValue({
		key: "mantine-color-scheme",
		defaultValue: "dark"
	});
	const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
	const [cartLength, setCartLength] = useState(0);
	const [cartItems, setCartItems] = useState([]);

	function addItemHandler(product) {
		setCartLength(cartLength + 1);
		setCartItems([...cartItems, product]);
	}

	function removeItemHandler(id, amount) {
		setCartLength(cartLength - amount);
		setCartItems(cartItems.filter((item) => item.id !== id));
	}

	function updateCartAmount(length) {
		setCartLength(length);
	}

	return (
		<Router>
			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider
					theme={{
						colorScheme
					}}>
					<Paper padding='lg' radius={0} style={{ minHeight: "100vh" }}>
						<div className='App'>
							<Navbar cartLength={cartLength} />
							<Divider size='lg' />
							<Routes>
								<Route path='/shopping-page' element={<Home clickHandler={addItemHandler} />} />
								<Route path='/shopping-page/about' element={<About />} />
								<Route
									path='/shopping-page/cart'
									element={
										<Cart
											cartItems={cartItems}
											amountUpdateHandler={updateCartAmount}
											removeItemHandler={removeItemHandler}
										/>
									}
								/>
							</Routes>
						</div>
					</Paper>
				</MantineProvider>
			</ColorSchemeProvider>
		</Router>
	);
}
