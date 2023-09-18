import { createStyles, Flex } from "@mantine/core"
import ListItem from "./ListItem"
import checkout from "../../../assets/images/checkout.png"
import figma from "../../../assets/images/figma.png"
import avatar1 from "../../../assets/images/avatar-1.png"
import avatar2 from "../../../assets/images/avatar-2.png"
import avatar3 from "../../../assets/images/avatar-3.png"
const useListBodyStyles = createStyles(() => ({
	root: {
		padding: "0 3.2rem 3.2rem 3.2rem",
	},
}))

const listItems = [
	{
		label: "Usability Data Application Completion",
		status: "Recruiting",
		flows: 2,
		type: "Manual",
		imgSrc: figma,
		avatar: [avatar1, avatar2, avatar3],
	},

	{
		label: "Checkout Process Flows",
		status: "Testing",
		flows: 4,
		type: "Manual",
		imgSrc: figma,
		avatar: [avatar1, avatar2, avatar3],
	},
	{
		label: "Customization Module",
		status: "Testing",
		flows: 4,
		type: "Manual",
		imgSrc: checkout,
		avatar: [avatar1, avatar2, avatar3],
	},
	{
		label: "Profile Completion Flows",
		status: "Recruiting",
		flows: 3,
		type: "Manual",
		imgSrc: checkout,
		avatar: [avatar1, avatar2, avatar3],
	},
	{
		label: "Checkout Process Flow",
		status: "Recruiting",
		flows: 3,
		type: "Manual",
		imgSrc: checkout,
		avatar: [avatar1, avatar2, avatar3],
	},
]
const ListBody = () => {
	const { classes } = useListBodyStyles()
	return (
		<Flex
			className={classes.root}
			gap='0.8rem'
			direction='column'
		>
			{listItems.map(item => (
				<ListItem
					item={item}
					key={item.label}
				/>
			))}
		</Flex>
	)
}

export default ListBody
