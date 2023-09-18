import { Flex, Text, createStyles } from "@mantine/core"

const useRequestHeaderStyles = createStyles(theme => ({
	headerText: {
		fontFamily: "Manrope",
		letterSpacing: "-0.144rem",
		color: theme.colors["brand"][6],
		fontSize: "3.2rem",
		fontWeight: 700,
	},
	bodyText: {
		color: theme.colors["brand"][0],
		fontSize: "1.6rem",
	},
}))

const Header = () => {
	const { classes } = useRequestHeaderStyles()

	return (
		<Flex
			direction='column'
			gap='0.8rem'
		>
			<Text className={classes.headerText}>Requests</Text>
			<Text className={classes.bodyText}>
				Select preferred criteria for testers
			</Text>
		</Flex>
	)
}

export default Header
