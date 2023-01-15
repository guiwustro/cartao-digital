import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomButton from "../components/Buttons";

import AddCard from "../pages/AddCard";
import ListCard from "../pages/ListCard";

const Navigation = () => {
	const Stack = createNativeStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Cartões"
				options={({ navigation }) => ({
					headerTitleStyle: {
						fontWeight: "700",
						fontSize: 40,
						fontFamily: "Raleway",
					},
					headerShadowVisible: false,
					contentStyle: {
						marginTop: 37,
					},
					headerRight: () => (
						<CustomButton
							type="Plus"
							textTitle="+"
							onPress={() => navigation.navigate("Adicionar cartão")}
						/>
					),
				})}
				component={ListCard}
			/>
			<Stack.Screen
				name="Adicionar cartão"
				component={AddCard}
				options={{
					headerTitleStyle: {
						fontWeight: "700",
						fontSize: 20,
						fontFamily: "Raleway",
					},
					headerShadowVisible: false,
					contentStyle: {
						marginTop: 20,
					},
				}}
			/>
		</Stack.Navigator>
	);
};

export default Navigation;
