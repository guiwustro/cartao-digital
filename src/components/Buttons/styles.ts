import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
	PlusButton: {
		backgroundColor: "#FFFFFF",
		width: 45,
		height: 45,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		shadowColor: "#000000",
		shadowOffset: { width: 1, height: 5 },
		shadowOpacity: 0.1,
		shadowRadius: 20,
		elevation: 3,
	},
	AddButton: {
		height: 65,
		backgroundColor: "#00B2FF",
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	SvgButton: {
		height: 65,
		backgroundColor: "#FFFFFF",
		shadowColor: "#000000",
		justifyContent: "center",
		borderRadius: 10,
		shadowOffset: { width: 1, height: 5 },
		shadowOpacity: 0.05,
		shadowRadius: 20,
		elevation: 3,
		paddingLeft: 21,
		marginBottom: 16,
	},
	PlusText: {
		fontSize: 26,
		fontWeight: "400",
	},
	AddText: {
		fontFamily: "Raleway",
		fontWeight: "700",
		color: "#FFFFFF",
		fontSize: 15,
	},
	SvgText: {
		color: "#2D2940",
		lineHeight: 15,
		fontSize: 13,
		paddingLeft: 20,
		fontWeight: "700",
		textTransform: "uppercase",
	},
});
