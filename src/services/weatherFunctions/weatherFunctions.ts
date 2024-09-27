import moment from "moment";
import { GetWeatherResponse } from "@/types/openMateo";
import { weatherConditions } from "../weatherCodeObject";

export const formatTime = (isoDate: string) => {
	if (!moment(isoDate).isValid()) {
		throw new Error("Invalid date string");
	}

	return moment(isoDate).format("HH:mm");
};

export const getSunrise = (index: number, weatherData: GetWeatherResponse) => {
	if (!weatherData) return;

	return formatTime(weatherData.daily.sunrise[index]);
};

export const getSunset = (index: number, weatherData: GetWeatherResponse) => {
	if (!weatherData) return;

	return formatTime(weatherData.daily.sunset[index]);
};

export const getWeekday = (dateString: string) => {
	if (!moment(dateString).isValid()) {
		throw new Error("Invalid date string");
	}

	return moment(dateString).format("dddd");
};

export const formatDate = (dateString: string) => {
	if (!moment(dateString).isValid()) {
		throw new Error("Invalid date string");
	}

	return moment(dateString).format("MMM D");
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

export const getIcon = (dayIndex: number, weatherData: GetWeatherResponse): string => {
	const weatherCode = weatherData.daily.weather_code[dayIndex];
	return weatherConditions[Number(weatherCode)].icon;
};

export const getDescription = (index: number, weatherData: GetWeatherResponse): string => {
	const condition = weatherData.daily.weather_code[index];
	return weatherConditions[Number(condition)].description;
};
