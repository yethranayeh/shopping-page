/** @format */
import "../styles/Card.css";
import { Badge, Button, Card as MCard, Image, Group, Spoiler, Text, useMantineTheme } from "@mantine/core";
import { PlusIcon } from "@modulz/radix-icons";

export default function Card({ id, imgSrc, title, price, description, clickHandler, cart }) {
	const theme = useMantineTheme();

	const imgSize = 150;

	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
	return (
		<div className='Card'>
			<MCard shadow='sm' padding='lg'>
				<MCard.Section>
					<Image src={imgSrc} height={imgSize} alt={title} withPlaceholder />
				</MCard.Section>

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

				{!cart && (
					<Button variant='light' color='blue' fullWidth style={{ marginTop: 14 }} onClick={() => clickHandler(id)}>
						<PlusIcon style={{ marginRight: 5 }} />
						Add to cart
					</Button>
				)}
			</MCard>
		</div>
	);
}
