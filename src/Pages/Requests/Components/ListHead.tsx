import { Box, Flex, Text, createStyles } from "@mantine/core"
import { Button } from "@mantine/core"
import { New } from "../../../assets/icons"

import { useState } from "react"
const useListHeadStyles = createStyles(theme => ({
	root: {
		borderRadius: "2.4rem",
		width: "100%",
		background: theme.white,
		padding: "1.6rem 3.2rem",
		borderBottom: "0.1rem solid rgba(7, 56, 58, 0.06)",
	},
	btnRoot: {
		borderRadius: "5rem",
		background: theme.colors["brand"][4],
		height: "fit-content",
		padding: "1.2rem 1.6rem",
	},
	btnInner: {
		gap: "1.2rem",
	},
	btnIcon: {
		fill: theme.colors["yellow"][0],
		marginLeft: "0",
	},
	btnLabel: {
		color: theme.white,
		fontSize: "1.4rem",
		fontWeight: 500,
		letterSpacing: "-0.28px",
		lineHeight: "1.8rem",
		backdropFilter: "blur(13.93034839630127px)",
	},
	tabLinks: {
		border: "0.796px solid rgba(5, 49, 50, 0.10)",
		background: theme.colors["gray"][0],
		borderRadius: "5rem",
		padding: "0.4rem 0.5rem",
	},
	tabLink: {
		borderRadius: "5rem",
		height: "100%",
		padding: "1.1144rem 1.194rem 0.9552rem 1.3532rem",
		cursor: "pointer",
		transition: "0.3s all ease",
	},
	tabLinkActive: {
		backgroundColor: theme.white,
	},
	tabLinkText: {
		color: theme.colors["brand"][0],
		fontSize: "1.4rem",
		textAlign: "center",
		letterSpacing: "-0.021rem",
	},
	tabLinkTextActive: {
		color: theme.colors["brand"][3],
		fontWeight: 500,
	},
}))
const data = [
	{ label: "In Progress", value: "inProgress" },
	{ label: "Completed", value: "completed" },
]
const ListHead = () => {
	const { classes, cx } = useListHeadStyles()
	const [active, setActive] = useState("inProgress")

	return (
		<Flex
			justify='space-between'
			className={classes.root}
			align='center'
		>
			<Flex
				className={classes.tabLinks}
				align='center'
			>
				{data.map(datum => (
					<Box
						className={cx(classes.tabLink, {
							[classes.tabLinkActive]: active === datum.value,
						})}
						onClick={() => {
							setActive(datum.value)
						}}
						key={datum.value}
					>
						<Text
							className={cx(classes.tabLinkText, {
								[classes.tabLinkTextActive]: active === datum.value,
							})}
						>
							{datum.label}
						</Text>
					</Box>
				))}
			</Flex>
			<Button
				classNames={{
					root: classes.btnRoot,
					inner: classes.btnInner,
					icon: classes.btnIcon,
					label: classes.btnLabel,
				}}
				rightIcon={<New />}
			>
				Create New
			</Button>
		</Flex>
	)
}

export default ListHead
