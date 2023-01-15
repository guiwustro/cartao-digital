import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";

export default function App() {
	const [fontsLoaded] = useFonts({
		Raleway: require("./assets/fonts/Raleway-VariableFont_wght.ttf"),
		"Raleway-SemiBold": require("./assets/fonts/Raleway-SemiBold.ttf"),
	});
	if (!fontsLoaded) return null;

	return (
		<NavigationContainer>
			<Navigation />
		</NavigationContainer>
	);
}
