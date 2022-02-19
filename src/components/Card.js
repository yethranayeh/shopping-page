/** @format */
import { Card as MCard, Image, Text, Badge, Button, Group, useMantineTheme } from "@mantine/core";
import { PlusIcon } from "@modulz/radix-icons";

export default function Card({ imgSrc, title, price, description, clickHandler }) {
	const theme = useMantineTheme();

	const imgSize = 150;

	const secondaryColor = theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
	return (
		<div className='Card'>
			<MCard shadow='sm' padding='lg'>
				<MCard.Section>
					<Image src={imgSrc} height={imgSize} alt={title} />
				</MCard.Section>

				<Group position='apart' style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
					<Text weight={500}>{title}</Text>
					<Badge color='pink' variant='light'>
						${price}
					</Badge>
				</Group>

				<Text size='sm' style={{ color: secondaryColor, lineHeight: 1.5 }}>
					{description}
				</Text>

				<Button variant='light' color='blue' fullWidth style={{ marginTop: 14 }} onClick={clickHandler}>
					<PlusIcon style={{ marginRight: 5 }} />
					Add to cart
				</Button>
			</MCard>
		</div>
	);
}
