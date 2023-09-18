import MantineProvider from "./MantineProvider"
import Dashboard from "./Pages/Dashboard"

const App = () => {
	return (
		<MantineProvider>
			<Dashboard />
		</MantineProvider>
	)
}

export default App
