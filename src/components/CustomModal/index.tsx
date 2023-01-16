import React from "react";
import { Modal, Text, Pressable, View, PressableProps } from "react-native";
import TextCustomFont from "../TextCustomFont";
import { styles } from "./styles";

interface IPropsCustomModal extends PressableProps {
	title: string;
	description: string;
	isOpenModal: boolean;
	onClickCloseButton: () => void;
}

const CustomModal = ({
	title,
	description,
	isOpenModal,
	onClickCloseButton,
	...rest
}: IPropsCustomModal) => {
	return (
		<View style={styles.centeredView}>
			<Modal
				animationType="slide"
				transparent={true}
				visible={isOpenModal}
				onRequestClose={() => {
					onClickCloseButton();
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<TextCustomFont
							style={[styles.modalText, styles.modalTitle]}
							description={title}
						/>
						<TextCustomFont
							style={styles.modalText}
							description={description}
						/>
						<View style={styles.buttonContainer}>
							<Pressable
								style={[styles.button, styles.buttonCancel]}
								onPress={() => onClickCloseButton()}
							>
								<TextCustomFont
									style={styles.textStyle}
									description="Cancelar"
								/>
							</Pressable>
							<Pressable
								style={[styles.button, styles.buttonConfirm]}
								{...rest}
							>
								<Text style={styles.textStyle}>Confirmar</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
};

export default CustomModal;
