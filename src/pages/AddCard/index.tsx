import { View, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import { useState } from "react";
import AddCardForm from "../../components/AddCardForm";
import { Card } from "../../components/Card";
import { styles } from "./styles";
import { ICard } from "../../types/Card";

const AddCard = () => {
	const [newCard, setNewCard] = useState<ICard>({
		card_name: "Nome do cartão",
		card_number: "",
		person_name: "Nome completo",
	});
	return (
		<KeyboardAvoidingView
			behavior={"padding"}
			style={styles.container}
			keyboardVerticalOffset={-500}
		>
			<ScrollView
				style={{
					width: "100%",
					flex: 1,
				}}
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
						alreadyCreated={false}
					/>
				</View>
				<AddCardForm setNewCard={setNewCard} newCard={newCard} />
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default AddCard;
