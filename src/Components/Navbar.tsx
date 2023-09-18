import {
	Logo,
	Home,
	Schedule,
	Testers,
	Requests,
	Settings,
	Help,
} from "../assets/icons"
import { Navbar, NavLink, createStyles, MediaQuery } from "@mantine/core"

const NavLinks = [
	{ text: "Home", icon: Home },
	{ text: "Schedule", icon: Schedule },
	{ text: "Requests", icon: Requests },
	{ text: "Testers", icon: Testers },
]
const FooterLinks = [
	{ text: "Settings", icon: Settings },
	{ text: "Help", icon: Help },
]

const useNavBarStyles = createStyles(() => ({
	root: {
		marginBottom: "4.8rem",
		minWidth: "16.6rem",
		paddingTop: "3.2rem",
		paddingBottom: "3.2rem",
		borderRadius: "1.8rem",
		borderStyle: "solid",
		borderWidth: "0.1rem",
		borderColor: `rgba(225, 225, 225, 0.13)`,
		top: "calc(5rem - 8rem)",
		display: "flex",
		flexDirection: "column",
		minHeight: "75.4rem",
		overflowY: "auto",
		position: "relative",
		// minHeight: "100vh",
		// height: "calc(100vh - 4.8rem)",
	},
}))
const useNavLinkStyles = createStyles(theme => {
	return {
		label: {
			fontWeight: 400,
			fontSize: "1.4rem",
			color: theme.colors[theme.primaryColor][2],
			opacity: 0.86,
		},
		homeLabel: {
			fontWeight: 500,
			fontSize: "1.6rem",
			opacity: 1,
			color: theme.colors[theme.primaryColor][2],
		},
		icon: {
			ref: "icon",
			fill: theme.colors["gray"][5],
			marginRight: "1.6rem",
		},
		iconTesters: {
			ref: "icon",
			fill: theme.colors["gray"][5],
			marginRight: "1.2rem",
		},
		root: {
			padding: "1.2rem 2.4rem",
			"&:hover": {
				background: "none",
			},

			"&[data-active=true]": {
				backgroundColor: theme.colors["gray"][0],
				borderRadius: "0.8rem",
				fontWeight: 500,

				"&:hover": {
					backgroundColor: theme.colors["gray"][0],
				},
				"& .icon": {
					fill: theme.colors[theme.primaryColor][1],
				},
				"& .iconTesters": {
					fill: theme.colors[theme.primaryColor][1],
				},
			},
		},
	}
})
const Nav = () => {
	const { classes, cx } = useNavLinkStyles()
	const { classes: navBarClasses } = useNavBarStyles()
	return (
		<MediaQuery
			styles={{
				marginLeft: "5.5rem",
			}}
			query='(max-width: 1280px)'
		>
			<Navbar classNames={{ root: navBarClasses.root }}>
				<Navbar.Section
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Logo />
				</Navbar.Section>
				<Navbar.Section
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "0.8rem",
						paddingTop: "5.5rem",
						margin: "0 0.8rem",
					}}
				>
					{NavLinks.map(link => {
						return (
							<NavLink
								key={link.text}
								icon={<link.icon />}
								label={link.text}
								active={link.text === "Requests"}
								classNames={{
									root: classes.root,
									icon: cx({
										[classes.iconTesters]: link.text === "Testers",
										[classes.icon]: link.text !== "Testers",
									}),
									label: cx({
										[classes.homeLabel]: link.text === "Home",
										[classes.label]: link.text !== "Home",
									}),
								}}
								className={cx({
									[classes.homeLabel]: link.text === "Home",
								})}
							/>
						)
					})}
				</Navbar.Section>
				<Navbar.Section
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "0.8rem",
						margin: "0 0.8rem",
						flexGrow: 1,
						justifyContent: "flex-end",
					}}
				>
					{FooterLinks.map(link => {
						return (
							<NavLink
								key={link.text}
								icon={<link.icon />}
								label={link.text}
								classNames={{
									root: classes.root,
									label: classes.label,
									icon: classes.icon,
								}}
							/>
						)
					})}
				</Navbar.Section>
			</Navbar>
		</MediaQuery>
	)
}

export default Nav
