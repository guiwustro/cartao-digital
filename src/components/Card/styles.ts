import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	containerWithBackground: {
		height: 205,
		borderRadius: 15,
		overflow: "hidden",
		width: "100%",
		maxWidth: 328,
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
		color: "#FFFFFF",
		fontWeight: "700",
	},
	smallText: {
		fontSize: 16,
		color: "#FFFFFF",
		fontWeight: "500",
	},
	footer: {
		justifyContent: "center",
	},
	cardName: {},
});
