/** @format */
import Card from "./Card";
import { Grid } from "@mantine/core";

export default function Cart({ cartItems }) {
	const prices = cartItems.map((item) => Number(item.price));
	const total = prices.reduce((prev, next) => prev + next, 0);
	return (
		<Grid justify='space-around' align='center' gutter='md'>
			<h2>Total: {total}</h2>
			{cartItems.map((product) => (
				<Grid.Col key={product.id} span={12}>
					<Card
						id={product.id}
						imgSrc={product.imgSrc}
						title={product.title}
						description={product.description}
						price={product.price}
						cart={true}
					/>
				</Grid.Col>
			))}
		</Grid>
	);
}
