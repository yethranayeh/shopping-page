/** @format */

import { useState, useEffect } from "react";
import { Grid } from "@mantine/core";
import Card from "./Card";

export default function Home() {
	const [products, setProducts] = useState([]);
	return (
		<div className='Home'>
			<h1>Home page</h1>
			<Grid justify='space-around' align='center' gutter='md'>
				{/* {products.map(product => <Card key={product.id} product={product} />)} */}
				<Grid.Col sm={6} md={3} lg={2}>
					<Card />
				</Grid.Col>
				<Grid.Col sm={6} md={3} lg={2}>
					<Card />
				</Grid.Col>
				<Grid.Col sm={6} md={3} lg={2}>
					<Card />
				</Grid.Col>
				<Grid.Col sm={6} md={3} lg={2}>
					<Card />
				</Grid.Col>
				<Grid.Col sm={6} md={3} lg={2}>
					<Card />
				</Grid.Col>
			</Grid>
		</div>
	);
}
