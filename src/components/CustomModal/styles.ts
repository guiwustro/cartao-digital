import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: colors.white,
		borderRadius: 20,
		padding: 35,
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 10,
		padding: 10,
		elevation: 2,
	},
	buttonConfirm: {
		backgroundColor: colors["red-200"],
	},
	buttonCancel: {
		backgroundColor: colors["grey-100"],
	},
	textStyle: {
		color: colors.white,
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
	modalTitle: {
		fontSize: 20,
		fontWeight: "600",
	},
	buttonContainer: {
		justifyContent: "space-between",
		flexDirection: "row",
	},
});
