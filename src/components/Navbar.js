/** @format */
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav>
			<Link to={"/"}>
				<h1>Shopping Page</h1>
			</Link>
			<ul>
				<li>
					<Link to={"/about"}>About</Link>
				</li>
				<li>
					<Link to={"/cart"}>Cart</Link>
				</li>
			</ul>
		</nav>
	);
}
