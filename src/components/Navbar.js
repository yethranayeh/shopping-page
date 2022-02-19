/** @format */
import { Link } from "react-router-dom";
import { Anchor, Title } from "@mantine/core";

export default function Navbar() {
	return (
		<nav>
			<Anchor component={Link} to={"/"}>
				<Title order={1} align={"left"}>
					Shopping Page
				</Title>
			</Anchor>
			<ul>
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
