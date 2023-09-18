import { Flex, MediaQuery, Box, ScrollArea } from "@mantine/core"
import Header from "./Components/Header"
import RequestList from "./Components/List"

const Requests = () => {
	return (
		<MediaQuery
			styles={{
				minWidth: "76.8rem",
				width: "auto",
				paddingRight: "5.5rem",
			}}
			query='(max-width: 1280px)'
		>
			<Flex
				gap='2rem'
				direction='column'
				sx={{
					marginTop: "4.8rem",
					width: "calc(122.5rem - 28.1rem)",
					overflowX: "auto",
				}}
			>
				<Header />
				<ScrollArea>
					<Box
						sx={{
							borderRadius: "2.4rem",
							minWidth: "calc(122.5rem - 28.1rem)",
							width: "auto",
							overflowX: "auto",
						}}
					>
						<RequestList />
					</Box>
				</ScrollArea>
			</Flex>
		</MediaQuery>
	)
}

export default Requests
