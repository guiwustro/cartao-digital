import { TCreditCardsRegexp } from "../../utils/creditCardValidator";
export interface ICard {
	id?: string;
	card_name: string;
	person_name: string;
	card_number: string;
	flag?: TCreditCardsRegexp;
}
