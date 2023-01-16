import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import CardActions from "../../components/CardActions";
import { styles } from "./styles";
import Carousel from "../../components/CarouselCards";
import { useAppSelector } from "../../hooks";
import TextCustomFont from "../../components/TextCustomFont";

const ListCard = () => {
	const { cardList } = useAppSelector((state) => state.card);
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			{cardList.length > 0 ? (
				<>
					<Carousel />
					<CardActions />
				</>
			) : (
				<View style={styles.containerContent}>
					<TextCustomFont
						description="Nenhum cartão foi encontrado. Adicione um cartão clicando no botão acima."
						style={styles.textEmptyContainer}
					/>
				</View>
			)}
		</View>
	);
};

export default ListCard;
