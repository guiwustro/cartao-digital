import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
	header: {
		marginTop: 24,
		marginBottom: 23,
	},
	container: {
		width: "90%",
	},
	title: {
		color: colors["grey-700"],
		alignSelf: "flex-start",
		fontFamily: "Raleway",
		fontWeight: "700",
		fontSize: 16,
		lineHeight: 19,
	},
});
