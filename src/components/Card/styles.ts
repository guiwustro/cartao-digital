import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../themes/colors";
const { width } = Dimensions.get("screen");
export const styles = StyleSheet.create({
	containerWithBackground: {
		width,
		alignItems: "center",
	},
	container: {
		flex: 1,
		maxHeight: 205,
		borderRadius: 15,
		paddingHorizontal: 20,
		paddingTop: 25,
		paddingBottom: 29,
		justifyContent: "space-between",
	},
	header: {
		justifyContent: "space-between",
		flexDirection: "row",
	},
	boldText: {
		fontSize: 20,
		color: colors.white,
		fontWeight: "700",
	},
	smallText: {
		fontSize: 16,
		color: colors.white,
		fontWeight: "500",
	},
	tinyFlag: {
		height: 40,
		maxWidth: 100,
	},
	footer: {
		justifyContent: "center",
	},
});
