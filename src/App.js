/** @format */

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";

export default function App() {
	return (
		<Router>
			<MantineProvider
				theme={{
					fontFamily: "Segoe UI"
				}}>
				<div className='App'>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/cart' element={<Cart />} />
					</Routes>
				</div>
			</MantineProvider>
		</Router>
	);
}
