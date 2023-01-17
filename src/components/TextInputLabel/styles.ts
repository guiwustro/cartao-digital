import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
export const styles = (hasError: boolean, isFocused = false) =>
	StyleSheet.create({
		container: {
			width: "100%",
			marginBottom: 10,
		},
		input: {
			fontFamily: "Roboto",
			borderColor: hasError
				? colors["red-500"]
				: isFocused
				? colors.blue
				: colors["grey-0"],
			borderWidth: 1,
			borderRadius: 6,
			fontWeight: "400",
			fontSize: 16,
			paddingVertical: 13,
			paddingHorizontal: 14,
			height: 45,
		},
		label: {
			fontFamily: "Raleway-SemiBold",
			fontSize: 8,
			marginBottom: 5,
			color: hasError
				? colors["red-200"]
				: isFocused
				? colors.blue
				: colors.black,
		},
		messageError: {
			color: colors["red-500"],
			fontFamily: "Raleway-SemiBold",
			fontSize: 8,
		},
	});
