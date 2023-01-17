import {
	Text,
	View,
	TouchableHighlight,
	TouchableHighlightProps,
} from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

interface IPropsCustomButton extends TouchableHighlightProps {
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
		<TouchableHighlight
			underlayColor="#DDDDDD"
			style={styles[`${type}Button`]}
			{...rest}
		>
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
		</TouchableHighlight>
	);
};

export default CustomButton;
