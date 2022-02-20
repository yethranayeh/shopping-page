/** @format */

import { useState, useEffect } from "react";
import { Grid, Skeleton } from "@mantine/core";
import Card from "./Card";

export default function Home(props) {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);
	const fetchProductAmount = 10;

	useEffect(() => {
		// setTimeout(() => {
		// 	setLoading(false);
		// }, 2000);
		async function fetchData() {
			const response = await fetch(`https://fakestoreapi.com/products?limit=${fetchProductAmount}`);
			const data = await response.json();
			setProducts([...data]);
			setLoading(false);
		}
		fetchData();
	}, []);

	function addToCart(id) {
		// Send the object with corresponding id to the Parent
		props.clickHandler(products.filter((product) => product.id === id)[0]);
	}

	if (loading) {
		return (
			<Grid justify='space-around' align='center' gutter='md'>
				{[...Array(fetchProductAmount).keys()].map((n) => {
					return (
						<Grid.Col key={n} sm={6} md={3} lg={2}>
							<Skeleton height={150} />
							<Skeleton height={16} width={"65%"} mt={6} />
							<Skeleton height={14} mt={6} />
						</Grid.Col>
					);
				})}
			</Grid>
		);
	}

	return (
		<div className='Home'>
			<Grid justify='space-around' align='flex-start' gutter='md'>
				{products.map((product) => (
					<Grid.Col key={product.id} sm={6} md={3} lg={2}>
						<Card
							id={product.id}
							imgSrc={product.image}
							title={product.title}
							description={product.description}
							price={product.price}
							addClickHandler={addToCart}
						/>
					</Grid.Col>
				))}
			</Grid>
		</div>
	);
}
