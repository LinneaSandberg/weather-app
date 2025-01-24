import { weatherConditions } from "../weatherCodeObject";
export const formatTime = (isoDate) => {
    const date = new Date(isoDate);
    if (isNaN(date.getTime())) {
        throw new Error("Invalid date string");
    }
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false });
};
export const getSunrise = (index, weatherData) => {
    return formatTime(weatherData.daily.sunrise[index]);
};
export const getSunset = (index, weatherData) => {
    return formatTime(weatherData.daily.sunset[index]);
};
export const getWeekday = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        throw new Error("Invalid date string");
    }
    // Get weekday name
    return date.toLocaleDateString("en-US", { weekday: "long" });
};
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        throw new Error("Invalid date string");
    }
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};
export const averageTemp = (index, weatherData) => {
    if (weatherData.daily.temperature_2m_max[index] === null ||
        weatherData.daily.temperature_2m_min[index] === null) {
        return undefined;
    }
    return (Math.round(((weatherData.daily.temperature_2m_max[index] +
        weatherData.daily.temperature_2m_min[index]) /
        2) *
        10) / 10);
};
export const getIcon = (dayIndex, weatherData) => {
    const weatherCode = weatherData.daily.weather_code[dayIndex];
    const iconName = weatherConditions[Number(weatherCode)].icon;
    return `assets/icons/${iconName}.svg`;
};
export const getDescription = (index, weatherData) => {
    const condition = weatherData.daily.weather_code[index];
    return weatherConditions[Number(condition)].description;
};
