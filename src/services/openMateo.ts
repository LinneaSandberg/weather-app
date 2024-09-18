import axios from "axios";

export const geocoding = async (city: string) => {
	const res = await axios.get(
		`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
	);
	return res.data;
};

export const getWeather = async (lat: number, lon: number) => {
	const res = await axios.get(
		`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
	);
	return res.data;
};
