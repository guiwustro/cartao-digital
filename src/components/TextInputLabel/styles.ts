import { StyleSheet } from "react-native";

export const styles = (hasError: boolean) =>
	StyleSheet.create({
		container: {
			width: "100%",
			marginBottom: 10,
		},
		input: {
			fontFamily: "Roboto",
			borderColor: hasError ? "red" : "#E3E1E1",
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
			color: hasError ? "red" : "#000000",
		},
		messageError: {
			color: "red",
			fontFamily: "Raleway-SemiBold",
			fontSize: 8,
		},
	});
