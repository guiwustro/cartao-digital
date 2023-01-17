import {
	Amex,
	DinersClub,
	Elo,
	Hipercard,
	Mastercard,
	Visa,
} from "../assets/images/flags";
import { View } from "react-native";
import React from "react";
<View>
	<Hipercard width={100} height={100} />
</View>;
export const cardFlagInfo = {
	elo: {
		icon: <Elo width={40} height={40} fill="black" />,
		colors: ["#D6D6D6", "#8E8E8E"],
	},
	hipercard: {
		icon: <Hipercard width={60} height={40} />,
		colors: ["#F8D363", "#F67E32"],
	},
	diners: {
		icon: <DinersClub width={40} height={40} />,
		colors: ["#AAC701", "#328000"],
	},
	amex: {
		icon: <Amex width={40} height={40} />,
		colors: ["#5F9CA0", "#152B2D"],
	},
	mastercard: {
		icon: <Mastercard width={40} height={40} />,
		colors: ["#1488CCCC", "#2B32B2CC"],
	},
	visa: {
		icon: <Visa width={60} height={30} />,
		colors: ["#E5A6F7", "#7B4AC0"],
	},
};
