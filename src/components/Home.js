/** @format */

import { useState, useEffect } from "react";
import { Grid } from "@mantine/core";
import Card from "./Card";

export default function Home() {
	const [products, setProducts] = useState([
		{
			id: 1,
			imgSrc: "https://picsum.photos/id/1/200",
			title: "Product title",
			description: "Product description",
			price: "100"
		},
		{
			id: 2,
			imgSrc: "https://picsum.photos/id/2/200",
			title: "Product title",
			description: "Second description",
			price: "140"
		},
		{
			id: 3,
			imgSrc: "https://picsum.photos/id/3/200",
			title: "Product title",
			description: "Product description",
			price: "50"
		}
	]);

	function clickHandler() {
		console.log("clicked");
	}

	return (
		<div className='Home'>
			<Grid justify='space-around' align='center' gutter='md'>
				{products.map((product) => (
					<Grid.Col key={product.id} sm={6} md={3} lg={2}>
						<Card
							imgSrc={product.imgSrc}
							title={product.title}
							description={product.description}
							price={product.price}
							clickHandler={clickHandler}
						/>
					</Grid.Col>
				))}
			</Grid>
		</div>
	);
}
