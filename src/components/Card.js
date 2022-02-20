/** @format */
import "../styles/Card.css";
import { useState } from "react";
import {
	Badge,
	Button,
	Card as CardMantine,
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
	changeAmountHandler
}) {
	const theme = useMantineTheme();
	const imgSize = cart ? 250 : 150;
	const [amount, setAmount] = useState(itemAmount);

	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
	if (cart) {
		function amountChangeHandler(amount) {
			if (amount > 0) {
				setAmount(amount);
				changeAmountHandler(id, amount);
			}
		}
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
