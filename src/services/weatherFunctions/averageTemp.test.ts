import { GetWeatherResponse } from "@/types/openMateo.types";
import { averageTemp } from "./weatherFunctions";

const mockData: GetWeatherResponse = {
	current: {},
	daily: {
		temperature_2m_max: [1, 2, 3, 4, 5, 6, 7],
		temperature_2m_min: [0, 1, 2, 3, 4, 5, 6],
		sunrise: [],
		sunset: [],
		rain_sum: [],
		time: [],
		weather_code: [],
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

const badMockdata: any = {
	current: {},
	daily: {
		temperature_2m_max: [null, null, null, null, null, null, null],
		temperature_2m_min: [0, 1, 2, 3, 4, 5, 6],
		sunrise: [],
		sunset: [],
		rain_sum: [],
		time: [],
		weather_code: [],
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

describe("averageTemp", () => {
	test("should return the avrage temperature of the max and min temperature for a day", () => {
		const index = 2;
		const weatherData = mockData;
		const result = averageTemp(index, weatherData);

		// skriv om resultatet till mockdata
		expect(result).toBe(2.5);
	});

	test("if only one temperature is a number and the other is null", () => {
		const index = 2;
		const weatherData = badMockdata;
		const result = averageTemp(index, weatherData);

		expect(result).toBeUndefined();
	});
});
