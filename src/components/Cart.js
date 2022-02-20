/** @format */
import "../styles/Cart.css";
import Card from "./Card";
import { Badge, Button, Grid } from "@mantine/core";

export default function Cart({ cartItems }) {
	const prices = cartItems.map((item) => Number(item.price));
	const total = prices.reduce((prev, next) => prev + next, 0);
	return (
		<Grid justify='space-around' align='center' gutter='md' className='Cart'>
			<Badge color='teal' variant='filled' size='lg' radius='sm'>
				Total: {`$${total}`}
			</Badge>
			{cartItems.map((product) => (
				<Grid.Col key={product.id} span={12} className='Cart__Item' mt={8}>
					<Card
						id={product.id}
						imgSrc={product.image}
						title={product.title}
						description={product.description}
						price={product.price}
						cart={true}
					/>
				</Grid.Col>
			))}
			<Button variant='gradient' gradient={{ from: "teal", to: "indigo" }} mt={16}>
				Proceed to Checkout
			</Button>
		</Grid>
	);
}
