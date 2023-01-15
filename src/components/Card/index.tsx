import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import TextCustomFont from "../TextCustomFont";
import { styles } from "./styles";

interface ICard {
	cardName: string;
	flag: string;
	cardNumber: string;
	personName: string;
}

export const Card = ({ cardName, cardNumber, flag, personName }: ICard) => {
	return (
		<View style={styles.containerWithBackground}>
			<LinearGradient
				style={{ height: 205 }}
				locations={[0, 1]}
				start={{ x: 0, y: 0.3 }}
				end={{ x: 0, y: 0.3 }}
				colors={["#FC6767CC", "#EC008CCC"]}
			>
				<View style={styles.container}>
					<View style={styles.header}>
						<TextCustomFont style={styles.boldText} description={cardName} />
						<TextCustomFont style={styles.boldText} description={flag} />
					</View>
					<View style={styles.footer}>
						<TextCustomFont style={styles.smallText} description={personName} />
						<TextCustomFont style={styles.boldText} description={cardNumber} />
					</View>
				</View>
			</LinearGradient>
		</View>
	);
};
