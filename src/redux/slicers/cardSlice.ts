import { ICard } from "./../../types/Card";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const data: ICard[] = [
	{
		id: "9b1ddeb4d-3b7d-4bad-9bdd-2ads6d",
		card_name: "Teste 1",
		person_name: "Gyuuiytu12",
		card_number: "1234 1234 1234 1334",
		flag: "elo",
	},
	{
		id: "9b15deb4d-3b7d-4bad-9bdd-gdfb6d",
		card_name: "Teste 2 ",
		person_name: "Guii ",
		card_number: "1234 1744 1234 1334",
		flag: "mastercard",
	},
	{
		id: "92b1deb34d-3b7d-4bad-9bdd-2bdasb6d",
		card_name: "Teste 3 ",
		person_name: "Tesstee ",
		card_number: "1234 1534 1234 1334",
		flag: "amex",
	},
	{
		id: "9b12deb4d-3b127d-4bad-9bdd-2b0cbvb6d",
		card_name: "Teste 4 ",
		person_name: "Teste 45 ",
		card_number: "1234 1934 1234 1334",
		flag: "hipercard",
	},
	{
		id: "9b12deb4d-3b27d-4bad-9bdd-2b0cbvb6d",
		card_name: "Teste 4 ",
		person_name: "Teste 45 ",
		card_number: "1234 1934 1234 1334",
		flag: "diners",
	},
	{
		id: "9b12deb4d-3b57d-4bad-9bdd-2b0cbvb6d",
		card_name: "Teste 4 ",
		person_name: "Teste 45 ",
		card_number: "1234 1934 1234 1334",
		flag: "visa",
	},
];

const newCardData = {
	cardList: data,
	actual_id: data[0].id,
	is_hidden_number: true,
};

interface ICardList {
	cardList: ICard[];
	actual_id?: string;
	is_hidden_number: boolean;
}

const initialState: ICardList = newCardData;

const cardSlice = createSlice({
	name: "card",
	initialState,
	reducers: {
		addNewCard: (state, action: PayloadAction<ICard>) => {
			const newCardList = [...state.cardList, action.payload];
			return { ...state, cardList: newCardList };
		},
		removeActualCard: (state) => {
			const newCardList = state.cardList.filter(
				({ id }) => id !== state.actual_id
			);
			return { ...state, cardList: newCardList };
		},
		toogleNumberVisibility: (state) => {
			return { ...state, is_hidden_number: !state.is_hidden_number };
		},
		changeActualId: (state, action: PayloadAction<string>) => {
			return { ...state, actual_id: action.payload };
		},
	},
});

export const {
	addNewCard,
	changeActualId,
	removeActualCard,
	toogleNumberVisibility,
} = cardSlice.actions;

export default cardSlice.reducer;
