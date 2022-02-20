/** @format */
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { Anchor, Title } from "@mantine/core";
import ThemeButton from "./ThemeButton";

export default function Navbar(props) {
	return (
		<nav className='Navbar'>
			<Anchor component={NavLink} to={"/shopping-page"}>
				<Title order={1} align={"left"}>
					Shopping Page
				</Title>
			</Anchor>
			<ThemeButton />
			<ul className='Navbar__Links'>
				<li>
					<Anchor component={NavLink} to={"/shopping-page"}>
						Home
					</Anchor>
				</li>
				<li>
					<Anchor component={NavLink} to={"/shopping-page/about"}>
						About
					</Anchor>
				</li>
				<li>
					<Anchor component={NavLink} to={"/shopping-page/cart"}>
						Cart{props.cartLength > 0 ? ` (${props.cartLength})` : ""}
					</Anchor>
				</li>
			</ul>
		</nav>
	);
}
