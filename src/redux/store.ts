import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slicers/cardSlice";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";

const reducers = combineReducers({
	card: cardReducer,
});

const persistConfig = {
	key: "root",
	storage: AsyncStorage,
	whitelist: ["card"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
