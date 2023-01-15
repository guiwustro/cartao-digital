import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import CardActions from "../../components/CardActions";
import { styles } from "./styles";

const ListCard = () => {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<CardActions />
		</View>
	);
};

export default ListCard;
