import { View, Text } from "react-native";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
	removeActualCard,
	toogleNumberVisibility,
} from "../../redux/slicers/cardSlice";
import CustomButton from "../Buttons";
import CustomModal from "../CustomModal";
import { styles } from "./styles";
import { useState } from "react";

const HideButtonInfo = {
	name: "eye-outline",
	color: "#2D2940",
	size: 23,
};

const ShowButtonInfo = {
	name: "eye-off-outline",
	color: "#2D2940",
	size: 23,
};

const TrashButtonInfo = {
	name: "trash-outline",
	color: "#F21D1D",
	size: 20,
};

const CardActions = () => {
	const dispatch = useAppDispatch();
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const { is_hidden_number, actual_id, cardList } = useAppSelector(
		(state) => state.card
	);
	const actualCardName = cardList.find(({ id }) => id === actual_id)?.card_name;

	const deleteCard = () => {
		dispatch(removeActualCard());
		setIsModalOpen(false);
	};
	const toogleCardNumber = () => {
		dispatch(toogleNumberVisibility());
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Ações</Text>
			</View>

			<CustomButton
				textTitle={is_hidden_number ? "Mostrar número" : "Esconder número"}
				type="Svg"
				svgIcon={is_hidden_number ? ShowButtonInfo : HideButtonInfo}
				onPress={() => toogleCardNumber()}
			/>
			<CustomButton
				textTitle="Apagar cartão"
				type="Svg"
				svgIcon={TrashButtonInfo}
				onPress={() => setIsModalOpen(true)}
			/>
			<CustomModal
				title="Confirmação"
				description={`Você tem certeza que deseja deletar o cartão ${actualCardName}? `}
				isOpenModal={isModalOpen}
				onClickCloseButton={handleCloseModal}
				onPress={() => deleteCard()}
			/>
		</View>
	);
};

export default CardActions;
