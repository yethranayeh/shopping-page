/** @format */
import "../styles/About.css";
import { Title, Text, List, ThemeIcon } from "@mantine/core";
import { CheckCircledIcon } from "@modulz/radix-icons";

export default function About() {
	return (
		<div className='About'>
			<Title order={2} className='About__Title'>
				Project
			</Title>
			<Text>
				This web application is built for the Odin Project{" "}
				<Text weight='bold' variant='gradient' gradient={{ from: "indigo", to: "cyan", deg: 45 }} component='span'>
					Shopping Cart
				</Text>{" "}
				assignment.
			</Text>
			<Text>
				It is a simple shopping cart application that allows users to add items from the{" "}
				<Text weight='bold' variant='gradient' gradient={{ from: "indigo", to: "cyan", deg: 45 }} component='span'>
					Home
				</Text>{" "}
				page and view them in their cart. It also allows users to change the amount of each item in their cart.
			</Text>

			<Title order={2} className='About__Title'>
				Technologies Used
			</Title>
			<List
				spacing='xs'
				size='sm'
				center
				icon={
					<ThemeIcon color='teal' size={24} radius='xl'>
						<CheckCircledIcon size={12} />
					</ThemeIcon>
				}>
				<List.Item>React</List.Item>
				<List.Item>Mantine</List.Item>
			</List>
		</div>
	);
}
