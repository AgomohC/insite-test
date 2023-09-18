import { createStyles, Flex, Text, Image, Indicator, Box } from "@mantine/core"
import { Manual, Flows, KebabMenu, Arrow } from "../../../assets/icons"
import { Avatar } from "@mantine/core"
interface IProps {
	item: {
		label: string
		status: string
		flows: number
		type: string
		imgSrc: string
		avatar: Array<string>
	}
}

const useListItemStyles = createStyles(theme => ({
	root: {
		padding: "1rem 1.6rem",
		borderRadius: "1.6rem",
		background: theme.white,
	},
	indicatorRoot: {
		backgroundColor: theme.colors["green"][0],
	},
	indicatorRootYellow: {
		backgroundColor: theme.colors["yellow"][0],
	},

	label: {
		fontFamily: "PP Mori",
		color: theme.colors["brand"][7],
		fontSize: "1.4rem",
		fontWeight: 600,
		letterSpacing: "-0.014rem",
	},
	info: {
		padding: "0.4rem",
		borderRadius: "0.8rem",
		background: "rgba(250, 250, 250, 0.42)",
		borderWidth: "0.3px",
		borderStyle: "solid",
		borderColor: theme.colors["gray"][8],
	},
	infoTag: {
		padding: "0.5rem 1.6rem",
		borderRightStyle: "solid",
		borderRightWidth: "0.08rem",
		borderRightColor: theme.colors["gray"][9],
		gap: "0.8rem",
	},
	infoTagText: {
		backdropFilter: "blur(17.5px)",
		color: theme.colors["gray"][6],
		fontFamily: "PP Mori",
		fontSize: "1.4rem",
		lineHeight: "2rem",
	},
	infoTagTextAdjust: {
		lineHeight: "1.82rem",
		minWidth: "6.8rem",
	},
	manual: {
		borderRadius: "0.8rem",
		background: theme.colors["brand"][8],
		padding: "0.2rem 0.4rem",
	},
	avatarContainer: {
		padding: "0.4rem 0.8rem",
		background: theme.white,
		borderRadius: "0.8rem",
		boxShadow: "0px 1px 5px 0px rgba(171, 171, 171, 0.25)",
	},
	avatar: {
		"&:nth-of-type(1)": {
			zIndex: 3,
		},
		"&:nth-of-type(2)": {
			zIndex: 2,
		},
		"&:nth-of-type(3)": {
			zIndex: 1,
		},
	},
	avatarText: {
		color: theme.colors["brand"][5],
		fontSize: "1.4rem",
		fontWeight: 500,
		lineHeight: "1.431rem",
	},
	icons: {
		paddingLeft: "1.6rem",
	},
	kebabIcon: {
		height: "3rem",
		width: "3rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		cursor: "pointer",
	},
	arrowIcon: {
		height: "3rem",
		width: "3rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: "50%",
		border: "0.367px solid rgba(227, 227, 227, 0.94)",
		cursor: "pointer",
	},
}))
const ListItem = ({ item }: IProps) => {
	const { classes, cx } = useListItemStyles()
	return (
		<Flex
			className={classes.root}
			align='center'
			justify='space-between'
		>
			<Flex
				gap='0.8rem'
				align='center'
				w='fit-content'
			>
				<Image
					src={item.imgSrc}
					width='2.2rem'
					height='2.2rem'
					fit='contain'
				/>
				<Text className={classes.label}>{item.label}</Text>
			</Flex>
			<Flex align='center'>
				<Flex
					className={classes.info}
					align='center'
				>
					<Flex
						className={classes.infoTag}
						align='center'
					>
						<Indicator
							size='0.6rem'
							classNames={{
								common:
									item.status === "Recruiting"
										? classes.indicatorRoot
										: classes.indicatorRootYellow,
							}}
						>
							<div></div>
						</Indicator>
						<Text
							className={cx(
								classes.infoTagText,
								classes.infoTagTextAdjust
							)}
						>
							{item.status}
						</Text>
					</Flex>
					<Flex
						gap='0.8rem'
						className={classes.infoTag}
						align='center'
					>
						<Flows />
						<Text className={classes.infoTagText}>
							{item.flows} Flows
						</Text>
					</Flex>
					<Flex
						className={classes.manual}
						gap='1.6rem'
					>
						<Flex
							gap='0.8rem'
							align='center'
							pt='0.3rem'
							pb='0.3rem'
							pl='1.6rem'
						>
							<Manual />
							<Text className={classes.infoTagText}>{item.type}</Text>
						</Flex>
						<Flex
							gap='0.8rem'
							className={classes.avatarContainer}
							align='center'
						>
							<Avatar.Group spacing='1.4rem'>
								{item.avatar.map((av, idx) => (
									<Avatar
										src={av}
										alt={item.label}
										key={idx}
										radius={"xl"}
										size='2.8rem'
										className={classes.avatar}
									/>
								))}
							</Avatar.Group>
							<Text className={classes.avatarText}>+ 80</Text>
						</Flex>
					</Flex>
				</Flex>
				<Flex
					gap='1rem'
					align='center'
					className={classes.icons}
				>
					<Box className={classes.kebabIcon}>
						<KebabMenu />
					</Box>
					<Box className={classes.arrowIcon}>
						<Arrow />
					</Box>
				</Flex>
			</Flex>
		</Flex>
	)
}

export default ListItem
