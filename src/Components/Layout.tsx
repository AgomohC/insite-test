import { AppShell } from "@mantine/core"
import Nav from "./Navbar"
import Header from "./Header"

interface IProps {
	children: React.ReactNode | React.ReactNode[]
}

export default function Layout({ children }: IProps) {
	return (
		<AppShell
			styles={{
				root: {
					maxWidth: "122.5rem",
					minHeight: "fit-content",
					margin: "0 auto",
				},
				body: {
					minHeight: "100%",
				},
				main: {
					marginLeft: "11.5rem",
					marginTop: "5rem",
					minHeight: "100%",
					height: "100%",
					maxWidth: "calc(122.5rem - 28.1rem)",
					padding: 0,
				},
			}}
			navbar={<Nav />}
			header={<Header />}
			layout='alt'
		>
			{children}
		</AppShell>
	)
}
