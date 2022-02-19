/** @format */
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { ActionIcon, Anchor, Title } from "@mantine/core";
import { HomeIcon } from "@modulz/radix-icons";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
	return (
		<nav className='Navbar'>
			<Anchor component={Link} to={"/"}>
				<Title order={1} align={"left"}>
					Shopping Page
				</Title>
			</Anchor>
			<ThemeButton />
			<ul className='Navbar__Links'>
				<li>
					<ActionIcon component={Link} to={"/"} aria-label='Home'>
						<HomeIcon style={{ width: 18, height: 18 }} />
					</ActionIcon>
				</li>
				<li>
					<Anchor component={Link} to={"/about"}>
						About
					</Anchor>
				</li>
				<li>
					<Anchor component={Link} to={"/cart"}>
						Cart
					</Anchor>
				</li>
			</ul>
		</nav>
	);
}
