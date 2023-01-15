import { View, Text } from "react-native";
import CustomButton from "../Buttons";
import { styles } from "./styles";

const HideButtonInfo = {
	name: "eye-outline",
	color: "#2D2940",
	size: 23,
};
const TrashButtonInfo = {
	name: "trash-outline",
	color: "#F21D1D",
	size: 20,
};

const CardActions = () => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Ações</Text>
			</View>
			<CustomButton
				textTitle="Esconder número"
				type="Svg"
				svgIcon={HideButtonInfo}
			/>
			<CustomButton
				textTitle="Apagar cartão"
				type="Svg"
				svgIcon={TrashButtonInfo}
			/>
		</View>
	);
};

export default CardActions;
