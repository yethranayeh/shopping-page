/** @format */
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { ActionIcon, Anchor, Title } from "@mantine/core";
import { HomeIcon } from "@modulz/radix-icons";
import ThemeButton from "./ThemeButton";

export default function Navbar(props) {
	return (
		<nav className='Navbar'>
			<Anchor component={NavLink} to={"/"}>
				<Title order={1} align={"left"}>
					Shopping Page
				</Title>
			</Anchor>
			<ThemeButton />
			<ul className='Navbar__Links'>
				<li>
					<Anchor component={NavLink} to={"/"}>
						Home
					</Anchor>
				</li>
				<li>
					<Anchor component={NavLink} to={"/about"}>
						About
					</Anchor>
				</li>
				<li>
					<Anchor component={NavLink} to={"/cart"}>
						Cart{props.cartLength > 0 ? ` (${props.cartLength})` : ""}
					</Anchor>
				</li>
			</ul>
		</nav>
	);
}
