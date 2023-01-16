import React from "react";
import { View } from "react-native";
import CustomButton from "../Buttons";
import TextInputLabel from "../TextInputLabel";
import { styles } from "./styles";
import { useForm, Controller } from "react-hook-form";
import { normalizeCardNumber } from "../../utils/masks";
import {
	creditCardsRegexp,
	TCreditCardsRegexp,
} from "../../utils/creditCardValidator";
import { addNewCard } from "../../redux/slicers/cardSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { v4 as uuidv4 } from "uuid";
import { useNavigation } from "@react-navigation/native";
import { ICard } from "../../types/Card";

interface IAddCardForm {
	setNewCard: React.Dispatch<React.SetStateAction<ICard>>;
	newCard: ICard;
}

const AddCardForm = ({ setNewCard, newCard }: IAddCardForm) => {
	const dispatch = useAppDispatch();
	const allCards = useAppSelector((state) => state.card.cardList);
	const navigation = useNavigation();

	const isDuplicatedNumberCard = (form_card_number: string) => {
		return allCards.some(({ card_number }) => card_number === form_card_number);
	};

	const {
		control,
		handleSubmit,
		setError,
		clearErrors,
		formState: { errors },
	} = useForm<ICard>();

	const handleRegisterCard = () => {
		if (!newCard.flag) {
			setError("card_number", {
				message: "Número de cartão inválido",
				type: "validate",
			});
			return;
		} else if (isDuplicatedNumberCard(newCard.card_number)) {
			setError("card_number", {
				message: "Esse número de cartão já foi adicionado aos seus cartões!",
				type: "validate",
			});
			return;
		} else {
			clearErrors("card_number");
		}
		dispatch(addNewCard(newCard));
		navigation.goBack();
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
					}}
					name="card_number"
					render={({ field: { onChange } }) => (
						<TextInputLabel
							label="NÚMERO"
							maxLength={19}
							onChangeText={(actualCardNumber) => {
								setNewCard((old) => ({
									...old,
									card_number: normalizeCardNumber(actualCardNumber),
								}));
								onChange(normalizeCardNumber(actualCardNumber));
								if (actualCardNumber) {
									const actualCardNumberWithoutSpace = actualCardNumber.replace(
										/ /g,
										""
									);
									let matchedCard: TCreditCardsRegexp | undefined;
									for (const cardFlagName in creditCardsRegexp) {
										const hasMatchCard = actualCardNumberWithoutSpace?.match(
											creditCardsRegexp[cardFlagName as TCreditCardsRegexp]
										);
										if (hasMatchCard) {
											matchedCard = cardFlagName as TCreditCardsRegexp;
										}
									}
									if (matchedCard) {
										setNewCard((old) => ({
											...old,
											id: uuidv4(),
											flag: matchedCard,
										}));
									}
								} else {
									setNewCard((old) => ({ ...old, flag: undefined }));
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
