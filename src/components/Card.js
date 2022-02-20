/** @format */
import "../styles/Card.css";
import { useState } from "react";
import {
	Badge,
	Button,
	Card as CardMantine,
	CloseButton,
	Image,
	Group,
	Spoiler,
	Text,
	useMantineTheme,
	NumberInput
} from "@mantine/core";
import { PlusIcon } from "@modulz/radix-icons";

export default function Card({
	id,
	itemAmount,
	imgSrc,
	title,
	price,
	description,
	addClickHandler,
	cart,
	changeAmountHandler,
	removeClickHandler
}) {
	const theme = useMantineTheme();
	const imgSize = cart ? 250 : 150;
	const [amount, setAmount] = useState(itemAmount);

	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
	function amountChangeHandler(amount) {
		if (amount > 0) {
			setAmount(amount);
			changeAmountHandler(id, amount);
		}
	}
	if (cart) {
		return (
			<div className='Card'>
				<CardMantine shadow='sm' padding='lg'>
					<CardMantine.Section>
						<Image src={imgSrc} height={imgSize} alt={title} withPlaceholder />
					</CardMantine.Section>

					<Group position='apart' style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
						<Text weight={500} className={"Card__Title"}>
							{title}
						</Text>
						<Badge color='indigo' variant='light' size='md'>
							{`$${price}`}
						</Badge>
					</Group>

					<Text size='sm' style={{ color: secondaryColor, lineHeight: 1.5 }}>
						<Spoiler maxHeight={100} showLabel='Show more' hideLabel='Hide'>
							{description}
						</Spoiler>
					</Text>
					<NumberInput label='Amount' defaultValue={amount} max={10} min={1} onChange={amountChangeHandler} />
					<CloseButton
						variant='filled'
						title='Remove from cart'
						color='red'
						size='lg'
						iconSize={24}
						className='Card__RemoveButton'
						onClick={() => removeClickHandler(id)}
					/>
				</CardMantine>
			</div>
		);
	} else {
		return (
			<div className='Card'>
				<CardMantine shadow='sm' padding='lg'>
					<CardMantine.Section>
						<Image src={imgSrc} height={imgSize} alt={title} withPlaceholder />
					</CardMantine.Section>

					<Group position='apart' style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
						<Text weight={500} className={"Card__Title"}>
							{title}
						</Text>
						<Badge color='indigo' variant='light' size='md'>
							{`$${price}`}
						</Badge>
					</Group>

					<Text size='sm' style={{ color: secondaryColor, lineHeight: 1.5 }}>
						<Spoiler maxHeight={100} showLabel='Show more' hideLabel='Hide'>
							{description}
						</Spoiler>
					</Text>

					<Button variant='light' color='blue' fullWidth style={{ marginTop: 14 }} onClick={() => addClickHandler(id)}>
						<PlusIcon style={{ marginRight: 5 }} />
						Add to cart
					</Button>
				</CardMantine>
			</div>
		);
	}
}
