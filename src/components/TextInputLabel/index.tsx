import { View, Text, TextInputProps, TextInput } from "react-native";
import { styles } from "./styles";

interface IMyTextCustomFont extends TextInputProps {
	label: string;
}

const TextInputLabel = ({ label, ...rest }: IMyTextCustomFont) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<TextInput style={styles.input} {...rest} />
		</View>
	);
};

export default TextInputLabel;
