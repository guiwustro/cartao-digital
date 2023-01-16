import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		alignItems: "center",
	},
	containerContent: {
		marginHorizontal: 20,
	},
	textEmptyContainer: {
		fontWeight: "500",
		color: "black",
		textAlign: "center",
	},
});
