import moment from "moment";
import { GetWeatherResponse } from "../../types/openMateo.types";
import { weatherConditions } from "../weatherCodeObject";

export const formatTime = (isoDate: string) => {
	return moment(isoDate).format("HH:mm");
};

export const getSunrise = (index: number, weatherData: GetWeatherResponse) => {
	if (weatherData) {
		return formatTime(weatherData.daily.sunrise[index]);
	}
};

export const getSunset = (index: number, weatherData: GetWeatherResponse) => {
	if (weatherData) {
		return formatTime(weatherData.daily.sunset[index]);
	}
};

export const getWeekday = (dateString: string) => {
	const date = new Date(dateString);
	const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return weekdays[date.getDay()];
};

export const formatDate = (dateString: string) => {
	const date = new Date(dateString);
	const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
	return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const averageTemp = (index: number, weatherData: GetWeatherResponse) => {
	if (!weatherData) return;

	if (
		weatherData.daily.temperature_2m_max[index] === null ||
		weatherData.daily.temperature_2m_min[index] === null
	) {
		return undefined;
	}

	return (
		Math.round(
			((weatherData.daily.temperature_2m_max[index] +
				weatherData.daily.temperature_2m_min[index]) /
				2) *
				10
		) / 10
	);
};

export const getIcon = (index: number, weatherData: GetWeatherResponse): string => {
	const weatherCode = weatherData.daily.weather_code[index];
	return weatherConditions[Number(weatherCode)].icon;
};

export const getDescription = (index: number, weatherData: GetWeatherResponse) => {
	const condition = weatherData.daily.weather_code[index];
	return weatherConditions[Number(condition)].description;
};
