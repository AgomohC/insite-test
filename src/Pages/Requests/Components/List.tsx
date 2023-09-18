import { Stack, createStyles } from "@mantine/core"
import ListHead from "./ListHead"
import ListBody from "./ListBody"

const useListStyles = createStyles(theme => ({
	root: {
		borderRadius: "2.4rem",
		gap: "2.4rem",
		width: "100%",
		background: "transparent",
		borderWidth: "0.1rem",
		borderStyle: "solid",
		borderColor: theme.colors["gray"][2],
	},
}))
const RequestList = () => {
	const { classes } = useListStyles()
	return (
		<Stack className={classes.root}>
			<ListHead />
			<ListBody />
		</Stack>
	)
}

export default RequestList
