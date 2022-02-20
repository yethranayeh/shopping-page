/** @format */
import "../styles/Cart.css";
import Card from "./Card";
import { useState, useEffect } from "react";
import { Alert, Badge, Button, Grid } from "@mantine/core";
import { ExclamationTriangleIcon } from "@modulz/radix-icons";

export default function Cart({ cartItems, amountUpdateHandler, removeItemHandler }) {
	const [cartItemsList, setCartItemsList] = useState(cartItems);
	const [uniqueItems, setUniqueItems] = useState(getUniqueItems());
	const [totalPrice, setTotalPrice] = useState(getTotalPrice());

	useEffect(() => {
		setCartItemsList(cartItems);
		setUniqueItems(getUniqueItems());
		setTotalPrice(getTotalPrice());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cartItems, cartItemsList]);

	function getUniqueItems() {
		return cartItemsList.reduce((acc, item) => {
			if (!acc.find((i) => i.id === item.id)) {
				acc.push(item);
			}
			return acc;
		}, []);
	}
	function updateUniqueItems() {
		setUniqueItems(getUniqueItems());
	}

	function getTotalPrice() {
		const prices = cartItemsList.map((item) => Number(item.price));
		const total = prices.reduce((prev, next) => prev + next, 0);
		return total.toFixed(2);
	}

	function updateTotalPrice() {
		setTotalPrice(getTotalPrice());
	}

	function findItemAmount(id) {
		return cartItemsList.filter((item) => item.id === id).length;
	}

	function changeHandler(id, amount) {
		const product = cartItemsList.find((item) => item.id === id);
		const itemAmount = findItemAmount(id);
		if (itemAmount < amount) {
			const newCartItemsList = [...cartItemsList];
			for (let i = 0; i < amount - itemAmount; i++) {
				newCartItemsList.push(product);
			}
			setCartItemsList(newCartItemsList);
		} else if (itemAmount > amount) {
			// Remove the first instance of product form cartItemsList
			const newCartItemsList = cartItemsList.filter((item) => item.id !== id);
			for (let i = 0; i < amount; i++) {
				newCartItemsList.push(product);
			}
			setCartItemsList(newCartItemsList);
		}

		updateUniqueItems();
		updateTotalPrice();
		amountUpdateHandler(cartItemsList.length);
	}

	function removeFromCart(id) {
		removeItemHandler(id, findItemAmount(id));
	}

	if (cartItemsList.length !== 0) {
		return (
			<Grid justify='center' align='center' gutter='md' className='Cart'>
				<Grid.Col span={12} className='Cart__Badge'>
					<Badge color='teal' variant='filled' size='lg' radius='sm'>
						Total: {`$${totalPrice}`}
					</Badge>
				</Grid.Col>
				<Grid.Col span={12}>
					{uniqueItems.map((product) => (
						<Grid.Col key={product.id} span={12} className='Cart__Item' mt={8}>
							<Card
								id={product.id}
								itemAmount={findItemAmount(product.id)}
								imgSrc={product.image}
								title={product.title}
								description={product.description}
								price={product.price}
								cart={true}
								changeAmountHandler={changeHandler}
								removeClickHandler={removeFromCart}
							/>
						</Grid.Col>
					))}
				</Grid.Col>
				<Grid.Col span={12} className='Cart__Checkout'>
					<Button variant='gradient' gradient={{ from: "teal", to: "indigo" }} mt={16}>
						Proceed to Checkout
					</Button>
				</Grid.Col>
			</Grid>
		);
	} else {
		return (
			<Alert icon={<ExclamationTriangleIcon size={16} />} title='No items!' color='yellow' variant='outline' mx='auto'>
				You have not added any items to your cart.
			</Alert>
		);
	}
}
