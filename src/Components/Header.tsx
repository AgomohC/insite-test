import {
	Header as Head,
	createStyles,
	Input,
	Flex,
	MediaQuery,
} from "@mantine/core"
import { Search } from "../assets/icons"
import ProfileBar from "./ProfileBar"
const useHeaderStyles = createStyles(() => ({
	root: {
		background: "transparent",
		maxWidth: "calc(122.5rem - 28.1rem)",
		minWidth: "76.8rem",
		width: "auto",
		left: "calc(16.6rem + 11.5rem)",
		position: "relative",
		top: "5rem",
		border: "none",
	},
}))
const useInputStyles = createStyles(theme => ({
	root: {
		background: theme.white,
		borderRadius: "1.6rem",
		display: "flex",
		width: "42rem",
		alignItems: "center",
	},
	icon: {
		left: "1.3rem",
		fill: theme.colors["brand"][0],
	},
	input: {
		height: "100%",
		fontSize: "1.6rem",
		padding: "1.8rem 1.1rem 1.8rem 4.75rem",
		color: theme.colors["brand"][3],
		caretColor: theme.colors["brand"][3],
		"&:placeholder": {
			color: theme.colors["brand"][0],
		},
		"&[data-with-icon]": {
			paddingLeft: "4.75rem",
		},
	},
}))
export default function Header() {
	const { classes } = useHeaderStyles()
	const { classes: inputClasses } = useInputStyles()
	return (
		<MediaQuery
			styles={{
				left: "calc(16.6rem + 11.5rem + 5.5rem)",
				paddingRight: "5.5rem",
			}}
			query='(max-width: 1280px)'
		>
			<Head
				height='8rem'
				classNames={{ root: classes.root }}
			>
				<Flex
					justify='space-between'
					align='flex-start'
					sx={theme => ({
						background: "transparent",
						borderBottomStyle: "solid",
						borderBottomWidth: "0.1rem",
						borderBottomColor: theme.colors["gray"][3],
						minHeight: "100%",
					})}
				>
					<Input
						icon={<Search />}
						placeholder='Search'
						radius='xl'
						variant='unstyled'
						classNames={{
							wrapper: inputClasses.root,
							icon: inputClasses.icon,
							input: inputClasses.input,
						}}
					/>
					<ProfileBar />
				</Flex>
			</Head>
		</MediaQuery>
	)
}
