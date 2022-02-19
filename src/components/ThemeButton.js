/** @format */

import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { SunIcon, MoonIcon } from "@modulz/radix-icons";

export default function ThemeButton() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";

	return (
		<ActionIcon
			variant='outline'
			color={dark ? "yellow" : "blue"}
			onClick={() => toggleColorScheme()}
			title='Toggle color scheme'>
			{dark ? <SunIcon style={{ width: 18, height: 18 }} /> : <MoonIcon style={{ width: 18, height: 18 }} />}
		</ActionIcon>
	);
}
