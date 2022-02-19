/** @format */

import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ColorSchemeProvider, MantineProvider, Paper } from "@mantine/core";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";

export default function App() {
	const [colorScheme, setColorScheme] = useState("light");
	const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	return (
		<Router>
			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider
					theme={{
						colorScheme
					}}>
					<div className='App'>
						<Paper padding='lg' radius={0} style={{ minHeight: "100vh" }}>
							<Navbar />
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/about' element={<About />} />
								<Route path='/cart' element={<Cart />} />
							</Routes>
						</Paper>
					</div>
				</MantineProvider>
			</ColorSchemeProvider>
		</Router>
	);
}
