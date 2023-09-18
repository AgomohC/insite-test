import { MantineProvider as Provider } from "@mantine/core"
import React from "react"
import CustomFonts from "./assets/fonts/CustomFonts"
import { Global } from "@mantine/core"

interface IProps {
	children: React.ReactNode | React.ReactNode[]
}

/**
 * opacity - 0.86
 ** brand - #063536
 * * grey 100 - #d2e0e0
 * * brand - #083c3e
 * * brand - #053132
 * * brand -  #4c5959
 * * brand -  #0B3839
 * * brand - #01292A
 * * brand - #575757
 *
 * * green - #22687E
 * * yellow - #F9BC34
 *
 * * grey - #EEEBEB
 *
 * * background - #F5F6F6
 */

function MyGlobalStyles() {
	return (
		<Global
			styles={theme => ({
				"*, *::before, *::after": {
					boxSizing: "border-box",
					margin: 0,
					padding: 0,
				},
				html: {
					fontSize: "62.5%",
				},
				"h1, h2, h3, h4, h5, h6, p": {
					color: theme.black,
				},
				body: {
					backgroundColor: theme.colors["gray"][1],
				},
			})}
		/>
	)
}

const MantineProvider = ({ children }: IProps) => {
	return (
		<Provider
			withGlobalStyles
			withNormalizeCSS
			theme={{
				fontFamily: "Inter",
				colors: {
					brand: [
						"#4C5959",
						"#083C3E",
						"#063536",
						"#0B3839",
						"#053132",
						"#01292A",
						"#083545",
						"#063334",
						"#FAFAFA",
					],
					gray: [
						"#F7F8F8",
						"#F5F6F6",
						"#EEEBEB",
						"#E4E4E4",
						"#E1E1E1",
						"#D2E0E0",
						"#575757",
						"#E3E3E3",
						"#C2C2C2",
						"#F0F0F0",
					],
					green: [" #22687E"],
					yellow: [" #F9BC34"],
				},
				primaryColor: "brand",
			}}
		>
			{children}
			<MyGlobalStyles />
			<CustomFonts />
		</Provider>
	)
}

export default MantineProvider
