import { Text, TextProps } from "react-native";

interface IMyTextCustomFont extends TextProps {
	description: string;
}

const TextCustomFont = ({ description, ...rest }: IMyTextCustomFont) => {
	return (
		<Text style={{ fontFamily: "Raleway" }} {...rest}>
			{description}
		</Text>
	);
};

export default TextCustomFont;
