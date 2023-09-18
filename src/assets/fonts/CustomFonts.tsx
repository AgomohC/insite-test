import interRegular from "./Inter/Inter-Regular.ttf"
import interMedium from "./Inter/Inter-Medium.ttf"
import interSemiBold from "./Inter/Inter-SemiBold.ttf"
import interBold from "./Inter/Inter-Bold.ttf"
import manropeMedium from "./Manrope/Manrope-Medium.ttf"
import manropeRegular from "./Manrope/Manrope-Regular.ttf"
import manropeBold from "./Manrope/Manrope-Bold.ttf"
import manropeSemiBold from "./Manrope/Manrope-SemiBold.ttf"
import ppMoriRegular from "./PP-Mori/PPMori-Regular.otf"
import ppMoriSemiBold from "./PP-Mori/PPMori-SemiBold.otf"
import { Global } from "@mantine/core"
const CustomFonts = () => {
	return (
		<Global
			styles={[
				{
					"@font-face": {
						fontFamily: "PP Mori",
						src: `url('${ppMoriSemiBold}') format("truetype")`,
						fontWeight: 600,
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "PP Mori",
						src: `url('${ppMoriRegular}') format("truetype")`,
						fontWeight: 400,
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Inter",
						src: `url('${interSemiBold}') format("truetype")`,
						fontWeight: 600,
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Inter",
						src: `url('${interMedium}') format("truetype")`,
						fontWeight: 500,
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Inter",
						src: `url('${interRegular}') format("truetype")`,
						fontWeight: 400,
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Inter",
						src: `url('${interBold}') format("truetype")`,
						fontWeight: 700,
						fontStyle: "normal",
					},
				},

				{
					"@font-face": {
						fontFamily: "Manrope",
						src: `url('${manropeSemiBold}') format("truetype")`,
						fontWeight: 600,
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Manrope",
						src: `url('${manropeMedium}') format("truetype")`,
						fontWeight: 500,
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Manrope",
						src: `url('${manropeRegular}') format("truetype")`,
						fontWeight: 400,
						fontStyle: "normal",
					},
				},
				{
					"@font-face": {
						fontFamily: "Manrope",
						src: `url('${manropeBold}') format("truetype")`,
						fontWeight: 700,
						fontStyle: "normal",
					},
				},
			]}
		/>
	)
}

export default CustomFonts
