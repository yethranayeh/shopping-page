/** @format */

import { useState, useEffect } from "react";
import { Container, Grid, Skeleton } from "@mantine/core";
import Card from "./Card";

export default function Home(props) {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([
		{
			id: 1,
			imgSrc: "https://picsum.photos/id/1/200",
			title: "Product title",
			description: "Product description",
			price: 100
		},
		{
			id: 2,
			imgSrc: "https://picsum.photos/id/2/200",
			title: "Product title",
			description: "Second description",
			price: 140
		},
		{
			id: 3,
			imgSrc: "https://picsum.photos/id/3/200",
			title: "Product title",
			description: "Product description",
			price: 50
		}
	]);

	function addToCart(id) {
		// Send the object with corresponding id to the Parent
		props.clickHandler(products.filter((product) => product.id === id)[0]);
	}

	if (loading) {
		return (
			<Grid justify='space-around' align='center' gutter='md'>
				<Grid.Col sm={6} md={3} lg={2}>
					<Skeleton height={150} />
					<Skeleton height={16} width={"65%"} mt={6} />
					<Skeleton height={14} mt={6} />
				</Grid.Col>
				<Grid.Col sm={6} md={3} lg={2}>
					<Skeleton height={150} />
					<Skeleton height={16} width={"65%"} mt={6} />
					<Skeleton height={14} mt={6} />
				</Grid.Col>
				<Grid.Col sm={6} md={3} lg={2}>
					<Skeleton height={150} />
					<Skeleton height={16} width={"65%"} mt={6} />
					<Skeleton height={14} mt={6} />
				</Grid.Col>
			</Grid>
		);
	}

	return (
		<div className='Home'>
			<Grid justify='space-around' align='center' gutter='md'>
				{products.map((product) => (
					<Grid.Col key={product.id} sm={6} md={3} lg={2}>
						<Card
							id={product.id}
							imgSrc={product.imgSrc}
							title={product.title}
							description={product.description}
							price={product.price}
							clickHandler={addToCart}
						/>
					</Grid.Col>
				))}
			</Grid>
		</div>
	);
}
