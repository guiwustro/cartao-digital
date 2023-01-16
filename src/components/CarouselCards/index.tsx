import { View, FlatList, Animated, ViewToken } from "react-native";
import { Card } from "../Card";
import React, { useRef } from "react";
import Pagination from "./Pagination";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeActualId } from "../../redux/slicers/cardSlice";

const Carousel = () => {
	const scrollX = useRef(new Animated.Value(0)).current;
	const card = useAppSelector((state) => state.card);
	const dispatch = useAppDispatch();

	const setActualCard = (id: string) => {
		dispatch(changeActualId(id));
	};

	const handleOnScroll = (event: any) => {
		Animated.event(
			[
				{
					nativeEvent: {
						contentOffset: {
							x: scrollX,
						},
					},
				},
			],
			{
				useNativeDriver: false,
			}
		)(event);
	};

	const handleOnViewableItemsChanged = useRef(
		(info: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
			if (info?.viewableItems[0]?.isViewable) {
				setActualCard(info.viewableItems[0].item.id);
			}
		}
	).current;
	const viewabilityConfig = useRef({
		itemVisiblePercentThreshold: 20,
	}).current;

	return (
		<View
			style={{
				position: "relative",
				height: 270,
				width: "100%",
			}}
		>
			<FlatList
				data={card.cardList}
				renderItem={({ item }) => (
					<Card
						cardName={item.card_name}
						cardNumber={item.card_number}
						personName={item.person_name}
						flag={item.flag}
						isHiddenNumber={card.is_hidden_number}
					/>
				)}
				horizontal
				pagingEnabled
				snapToAlignment="start"
				showsHorizontalScrollIndicator={false}
				onScroll={handleOnScroll}
				onViewableItemsChanged={handleOnViewableItemsChanged}
				viewabilityConfig={viewabilityConfig}
			/>
			<Pagination data={card.cardList} scrollX={scrollX} />
		</View>
	);
};

export default Carousel;
