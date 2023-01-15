import { View } from "react-native";
import { Card } from "../../components/Card";
import { styles } from "./styles";

const AddCard = () => {
	return (
		<View style={styles.container}>
			<View
				style={{
					marginBottom: 30,
					alignItems: "center",
					height: 205,
				}}
			>
				<Card
					cardName="Nome do cartão"
					flag="Bandeira"
					cardNumber="1234 1234 1234 1234"
					personName="Nome completo"
				/>
			</View>
		</View>
	);
};

export default AddCard;
