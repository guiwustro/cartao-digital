import { Pressable, PressableProps, Text, View } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

interface IPropsCustomButton extends PressableProps {
	type: "Plus" | "Add" | "Svg";
	svgIcon?: {
		name: string;
		color: string;
		size: number;
	};
	textTitle: string;
}

const CustomButton = ({
	type,
	textTitle,
	svgIcon,
	...rest
}: IPropsCustomButton) => {
	return (
		<Pressable style={styles[`${type}Button`]} {...rest}>
			{svgIcon ? (
				<View style={styles.container}>
					<Icon name={svgIcon.name} color={svgIcon.color} size={svgIcon.size} />
					<Text style={[styles[`${type}Text`], { color: svgIcon.color }]}>
						{textTitle}
					</Text>
				</View>
			) : (
				<Text style={styles[`${type}Text`]}>{textTitle}</Text>
			)}
		</Pressable>
	);
};

export default CustomButton;
