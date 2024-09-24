import { getIcon } from "./weatherFunctions";
import { weatherConditions } from "../weatherCodeObject";

const mockWeatherData = {
	current: {},
	daily: {
		temperature_2m_max: [],
		temperature_2m_min: [],
		sunrise: [],
		sunset: [],
		rain_sum: [],
		time: [],
		weather_code: [2, 3, 45, 48, 51, 53, 55],
		wind_speed_10m_max: [],
	},
	elevation: 0,
	generationtime: 0,
	latitude: 0,
	longitude: 0,
	timezone: "",
	timezone_abbreviation: "",
	utc_offset_seconds: 0,
};

describe("getIcon", () => {
	test("should return the correct icon for given weather_code", () => {
		expect(getIcon(0, mockWeatherData)).toBe(weatherConditions[2].icon);
	});

	// make a loop to
	// const listIcons = [2, 3, 45, 48, 51, 53, 55];
});
