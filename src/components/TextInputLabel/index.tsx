import { View, Text, TextInputProps, TextInput } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

interface IMyTextCustomFont extends TextInputProps {
	label: string;
	errorMessage?: string;
}

const TextInputLabel = ({
	label,
	errorMessage,
	...rest
}: IMyTextCustomFont) => {
	const [isFocused, setIsFocused] = useState(false);
	const hasError = !!errorMessage;

	return (
		<View style={styles(hasError).container}>
			<Text style={[styles(hasError, isFocused).label]}>{label}</Text>
			<TextInput
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				style={styles(hasError, isFocused).input}
				{...rest}
			/>
			{errorMessage && (
				<Text style={styles(hasError).messageError}>{errorMessage}</Text>
			)}
		</View>
	);
};

export default TextInputLabel;
