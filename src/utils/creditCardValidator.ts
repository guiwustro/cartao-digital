export const creditCardsRegexp: ICreditCardsRegexp = {
	elo: /^(50(67(0[78]|1[5789]|2[012456789]|3[0123459]|4[0-7]|53|7[4-8])|9(0(0[0-9]|1[34]|2[0134567]|3[0359]|4[01235678]|5[015789]|6[012356789]|7[013]|8[1234789]|9[1379])|1(0[34568]|4[6-9]|5[1-8]|8[36789])|2(2[02]|5[7-9]|6[012356789]|7[012345689]|8[012356789]|90)|357|4(0[7-9]|1[0-9]|2[0-2]|5[7-9]|6[0-7]|8[45])|55[01]|636|7(2[3-8]|31|6[5-9])))|4(0117[89]|3(1274|8935)|5(1416|7(393|63[12])))|6(27780|36368|5(0(0(3[1258]|4[026]|7[78])|4(06|1[0234]|2[2-9]|3[04589]|8[5-9]|9[0-9])|5(0[01346789]|1[012456789]|2[0-9]|3[0178]|5[2-9]|6[0-6]|7[7-9]|8[0134678]|9[1-8])|72[0-7]|9(0[1-9]|1[0-8]|2[0128]|3[89]|4[6-9]|5[0158]|6[2-9]|7[01]))|16(5[236789]|6[025678]|7[01456789]|88)|50(0[01356789]|1[2568]|36|5[1267]))))$/,
	hipercard: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
	diners: /^3(0[0-5]|[68]\d)\d{11}$/,
	amex: /^3[47]\d{13}$/,
	mastercard: /^(5[1-5]\d{4}|677189)\d{10}$/,
	visa: /^4\d{12}(\d{3})?$/,
};

interface ICreditCardsRegexp {
	elo: RegExp;
	hipercard: RegExp;
	diners: RegExp;
	amex: RegExp;
	visa: RegExp;
	mastercard: RegExp;
}

export type TCreditCardsRegexp =
	| "elo"
	| "hipercard"
	| "diners"
	| "amex"
	| "mastercard"
	| "visa";
