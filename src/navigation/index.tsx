import {
	CardStyleInterpolators,
	createStackNavigator,
} from "@react-navigation/stack";
import { TransitionSpec } from "@react-navigation/stack/lib/typescript/src/types";
import { Easing, View } from "react-native";
import CustomButton from "../components/Buttons";
import AddCard from "../pages/AddCard";
import ListCard from "../pages/ListCard";

const Navigation = () => {
	const Stack = createStackNavigator();

	const config = {
		animation: "timing",
		config: {
			duration: 200,
			easing: Easing.linear,
		},
	};
	return (
		<Stack.Navigator
			screenOptions={{
				gestureEnabled: true,
				transitionSpec: {
					open: config as TransitionSpec,
					close: config as TransitionSpec,
				},
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
			}}
		>
			<Stack.Screen
				name="Cartões"
				options={({ navigation }) => ({
					headerTitleStyle: {
						fontWeight: "700",
						fontSize: 40,
						fontFamily: "Raleway",
					},
					headerShadowVisible: false,
					headerRight: () => (
						<View
							style={{
								paddingRight: 24,
							}}
						>
							<CustomButton
								type="Plus"
								textTitle="+"
								onPress={() => navigation.navigate("Adicionar cartão")}
							/>
						</View>
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
				}}
			/>
		</Stack.Navigator>
	);
};

export default Navigation;
