import React from "react";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import "react-native-get-random-values";

export default function App() {
	const [fontsLoaded] = useFonts({
		Raleway: require("./src/assets/fonts/Raleway-VariableFont_wght.ttf"),
		"Raleway-SemiBold": require("./src/assets/fonts/Raleway-SemiBold.ttf"),
	});

	if (!fontsLoaded) return null;
	const persistor = persistStore(store);
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer>
					<Navigation />
				</NavigationContainer>
			</PersistGate>
		</Provider>
	);
}
