import axios from "axios";

export const geocoding = async (city: string) => {
	const res = await axios.get(
		`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
	);
	return res.data;
};
