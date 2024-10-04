import { GeoCodingResponse, GetWeatherResponse } from "../types/openMateo";
import axios from "axios";

export const geocoding = async (city: string) => {
	const res = await axios.get<GeoCodingResponse>(
		`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
	);
	return res.data;
};

/**
 * The function `getWeather` fetches weather data based on latitude and longitude coordinates using the
 * Open Meteo API in TypeScript.
 * @param {number} lat - Latitude coordinate for the location to get weather information.
 * @param {number} lon - The `lon` parameter in the `getWeather` function represents the longitude
 * coordinate of the location for which you want to retrieve weather information. Longitude is a
 * geographic coordinate that specifies the east-west position of a point on the Earth's surface. It is
 * measured in degrees, with values ranging from -180
 * @returns The `getWeather` function is returning the data received from the API endpoint
 * `https://api.open-meteo.com/v1/forecast` after making a GET request with the specified latitude and
 * longitude parameters. The response data is expected to be in the format defined by the
 * `GetWeatherResponse` type.
 */
export const getWeather = async (lat: number, lon: number) => {
	try {
		const res = await axios.get<GetWeatherResponse>(
			`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,wind_speed_10m_max&timezone=auto`
		);
		return res.data;
	} catch (error) {
		console.error("Error fetching weather data:", error);
		return null;
	}
};
