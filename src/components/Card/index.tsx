import { LinearGradient } from "expo-linear-gradient";
import { View, Animated, Easing, Image, Dimensions } from "react-native";
import { TCreditCardsRegexp } from "../../utils/creditCardValidator";
import TextCustomFont from "../TextCustomFont";
import { styles } from "./styles";
import { cardFlagInfo } from "../../constants/cardsFlagInfo";
interface ICardProps {
	cardName: string;
	flag?: TCreditCardsRegexp;
	cardNumber: string;
	personName: string;
	isHiddenNumber?: boolean;
	alreadyCreated?: boolean;
}

export const Card = ({
	cardName,
	cardNumber,
	flag,
	personName,
	isHiddenNumber,
	alreadyCreated = true,
}: ICardProps) => {
	const translateYImage = new Animated.Value(40);
	const { width } = Dimensions.get("screen");

	Animated.timing(translateYImage, {
		toValue: 0,
		duration: 500,
		useNativeDriver: true,
		easing: Easing.bounce,
	}).start();

	let cardNumberDisplayed = cardNumber;
	if (isHiddenNumber) {
		cardNumberDisplayed = `●●●● ●●●● ●●●● ●●●●`;
	}

	const gradualDisplayedCard = (actualNumberCard: string) => {
		const HIDDEN_CARD_NUMBERS = `●●●● ●●●● ●●●● ●●●●`;
		const PARTIAL_CARD_NUMBERS = HIDDEN_CARD_NUMBERS.slice(
			actualNumberCard.length,
			HIDDEN_CARD_NUMBERS.length
		);
		const formattedCardNumber = actualNumberCard + PARTIAL_CARD_NUMBERS;
		return formattedCardNumber;
	};

	if (!alreadyCreated) {
		cardNumberDisplayed = gradualDisplayedCard(cardNumberDisplayed);
	}

	let linearGradientColors = ["#FC6767CC", "#EC008CCC"];

	if (flag) {
		linearGradientColors = cardFlagInfo[flag].colors;
	}

	return (
		<View style={styles.containerWithBackground}>
			<LinearGradient
				style={{ height: 205, borderRadius: 10, maxWidth: 328, width }}
				locations={[0, 1]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				colors={linearGradientColors}
			>
				<View style={styles.container}>
					<View style={styles.header}>
						<TextCustomFont style={styles.boldText} description={cardName} />

						{flag && cardFlagInfo[flag].icon}
					</View>
					<View style={styles.footer}>
						<TextCustomFont style={styles.smallText} description={personName} />
						<TextCustomFont
							style={styles.boldText}
							description={cardNumberDisplayed}
						/>
					</View>
				</View>
			</LinearGradient>
		</View>
	);
};
