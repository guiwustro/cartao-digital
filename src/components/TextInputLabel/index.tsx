import { View, Text, TextInputProps, TextInput } from "react-native";
import { styles } from "./styles";

interface IMyTextCustomFont extends TextInputProps {
	label: string;
	errorMessage?: string;
}

const TextInputLabel = ({
	label,
	errorMessage,
	...rest
}: IMyTextCustomFont) => {
	const hasError = !!errorMessage;
	return (
		<View style={styles(hasError).container}>
			<Text style={styles(hasError).label}>{label}</Text>
			<TextInput style={styles(hasError).input} {...rest} />
			{errorMessage && (
				<Text style={styles(hasError).messageError}>{errorMessage}</Text>
			)}
		</View>
	);
};

export default TextInputLabel;
