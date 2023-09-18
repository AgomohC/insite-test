import { createStyles, Avatar, Text, Flex } from "@mantine/core"
import { ExpandMore } from "../assets/icons"
import avatar from "../assets/images/avatar.png"

const useProfileBarStyles = createStyles(theme => ({
	profile: {
		backgroundColor: theme.white,
		width: "24rem",
		borderRadius: "1.6rem",
		borderStyle: "solid",
		borderWidth: "0.1rem",
		borderColor: theme.colors["gray"][7],
		padding: "0.8rem",
	},
	avatarRoot: {
		aspectRatio: "1/1",
		width: "4rem",
		height: "4rem",
	},
	text: {
		color: theme.colors["brand"][0],
	},
	icon: {
		fill: theme.colors["brand"][6],
	},
}))
const ProfileBar = () => {
	const { classes } = useProfileBarStyles()
	return (
		<Flex
			className={classes.profile}
			gap='1.2rem'
			align='center'
		>
			<Flex
				gap='0.8rem'
				align='center'
			>
				<Avatar
					src={avatar}
					classNames={{ root: classes.avatarRoot }}
				/>
				<Text
					fz='1.6rem'
					className={classes.text}
				>
					jsmith@gmail.com
				</Text>
			</Flex>
			<ExpandMore className={classes.icon} />
		</Flex>
	)
}

export default ProfileBar
