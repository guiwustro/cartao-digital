import { View, KeyboardAvoidingView, ScrollView } from "react-native";
import AddCardForm, { ICardForm } from "../../components/AddCardForm";
import { Card } from "../../components/Card";
import { styles } from "./styles";
import { useState } from "react";
import { useHeaderHeight } from "@react-navigation/elements";

const AddCard = () => {
	const [newCard, setNewCard] = useState<ICardForm>({
		card_name: "Nome do cartão",
		card_number: "",
		person_name: "Nome completo",
		flag: "",
	});
	const height = useHeaderHeight();
	return (
		<KeyboardAvoidingView
			behavior="padding"
			// keyboardVerticalOffset={1}
			style={styles.container}
		>
			<ScrollView
				style={{
					width: "100%",
					flex: 1,
				}}
				contentInset={{ bottom: height }}
				contentContainerStyle={{ alignItems: "center" }}
			>
				<View
					style={{
						marginBottom: 30,
						alignItems: "center",
						height: 205,
						width: "100%",
					}}
				>
					<Card
						cardName={newCard.card_name}
						flag={newCard.flag}
						cardNumber={newCard.card_number}
						personName={newCard.person_name}
					/>
				</View>
				<AddCardForm setNewCard={setNewCard} newCard={newCard} />
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default AddCard;
