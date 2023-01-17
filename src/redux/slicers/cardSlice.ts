import { ICard } from "./../../types/Card";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "../../data";

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
		changeActualId: (state, action: PayloadAction<string>) => {
			return { ...state, actual_id: action.payload };
		},
		removeActualCard: (state) => {
			const newCardList = state.cardList.filter(
				({ id }) => id !== state.actual_id
			);
			let newCard = { ...state, cardList: newCardList };
			if (newCardList.length > 0) {
				newCard.actual_id = newCard.cardList[0].id;
			}
			return newCard;
		},
		toogleNumberVisibility: (state) => {
			return { ...state, is_hidden_number: !state.is_hidden_number };
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
