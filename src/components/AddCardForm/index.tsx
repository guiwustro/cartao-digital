import React from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView } from "react-native";
import CustomButton from "../Buttons";
import TextInputLabel from "../TextInputLabel";
import { styles } from "./styles";
import { useForm, Controller } from "react-hook-form";
import { normalizeCardNumber } from "../../utils/masks";
import {
	creditCardsRegexp,
	TCreditCardsRegexp,
} from "../../utils/creditCardValidator";

export interface ICardForm {
	card_name: string;
	person_name: string;
	card_number: string;
	flag?: string;
}

interface IAddCardForm {
	setNewCard: React.Dispatch<React.SetStateAction<ICardForm>>;
	newCard: ICardForm;
}

const AddCardForm = ({ setNewCard, newCard }: IAddCardForm) => {
	const {
		control,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<ICardForm>();
	console.log(errors);

	const handleRegisterCard = (data: ICardForm) => {
		console.log(errors);
	};
	return (
		<View style={styles.container}>
			<View style={styles.fieldTextContainer}>
				<Controller
					control={control}
					name="card_name"
					rules={{ required: "Campo obrigatório" }}
					render={({ field: { onChange } }) => (
						<TextInputLabel
							label="NOME DO CARTÃO"
							maxLength={30}
							onChangeText={(value) => {
								onChange(value);
								setNewCard((old) => ({ ...old, card_name: value }));
							}}
							errorMessage={errors.card_name?.message}
						/>
					)}
				/>
				<Controller
					control={control}
					name="person_name"
					rules={{ required: "Campo obrigatório" }}
					render={({ field: { onChange } }) => (
						<TextInputLabel
							label="NOME COMPLETO"
							onChangeText={(value) => {
								onChange(value);
								setNewCard((old) => ({ ...old, person_name: value }));
							}}
							errorMessage={errors.person_name?.message}
						/>
					)}
				/>
				<Controller
					control={control}
					rules={{
						required: "Campo obrigatório",
						minLength: {
							message: "Campo inválido",
							value: 19,
						},
						validate: () => {
							if (!newCard.flag) {
								setError("card_number", {
									message: "Campo inválido",
									type: "validate",
								});
							}
							return errors.card_number?.message;
						},
					}}
					name="card_number"
					render={({ field: { onChange } }) => (
						<TextInputLabel
							label="NÚMERO"
							onChangeText={(value) => {
								setNewCard((old) => ({
									...old,
									card_number: normalizeCardNumber(value),
								}));
								onChange(normalizeCardNumber(value));
								if (value) {
									const valueWithoutSpace = value.replace(/ /g, "");
									let matchedCard = "";
									for (const property in creditCardsRegexp) {
										const hasMatchCard = valueWithoutSpace?.match(
											creditCardsRegexp[property as TCreditCardsRegexp]
										);
										if (hasMatchCard) {
											matchedCard = property;
										}
									}
									if (matchedCard) {
										setNewCard((old) => ({ ...old, flag: matchedCard }));
										console.log(matchedCard);
									}
								} else {
									setNewCard((old) => ({ ...old, flag: "" }));
								}
							}}
							errorMessage={errors.card_number?.message}
							value={newCard?.card_number}
						/>
					)}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<CustomButton
					textTitle="ADICIONAR"
					type="Add"
					onPress={handleSubmit(handleRegisterCard)}
				/>
			</View>
		</View>
	);
};

export default AddCardForm;
