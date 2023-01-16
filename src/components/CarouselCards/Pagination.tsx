import { StyleSheet, Animated, View, Dimensions } from "react-native";
import React from "react";

const { width } = Dimensions.get("screen");

const Pagination = ({ data, scrollX }: any) => {
	return (
		<View style={styles.container}>
			{data.map((_: any, idx: any) => {
				const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

				const dotWidth = scrollX.interpolate({
					inputRange,
					outputRange: [12, 20, 12],
					extrapolate: "clamp",
				});

				const dotHeight = scrollX.interpolate({
					inputRange,
					outputRange: [12, 20, 12],
					extrapolate: "clamp",
				});

				const backgroundColor = scrollX.interpolate({
					inputRange,
					outputRange: ["#C4C4C4", "#383838", "#C4C4C4"],
					extrapolate: "clamp",
				});

				return (
					<Animated.View
						key={idx.toString()}
						style={[
							styles.dot,
							{ width: dotWidth, height: dotHeight, backgroundColor },
						]}
					/>
				);
			})}
		</View>
	);
};

export default Pagination;

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 40,
		flexDirection: "row",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	dot: {
		width: 12,
		height: 12,
		borderRadius: 100,
		marginHorizontal: 3,
		backgroundColor: "#C4C4C4",
	},
	dotActive: {
		backgroundColor: "#383838",
	},
});
