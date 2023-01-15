export const normalizeCardNumber = (value: string) => {
	return (
		value
			?.replace(/\D/g, "")
			?.match(/.{1,4}/g)
			?.join(" ")
			.substring(0, 19) || ""
	);
};
