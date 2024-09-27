import { GetWeatherResponse } from "@/types/openMateo";

export const averageTemp_Mockdata: GetWeatherResponse = {
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

export const expectedAverageTemp = 2.5;

export const averageTemp_badMockdata: any = {
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

export const getIcon_mockdata: GetWeatherResponse = {
	current: {},
	daily: {
		temperature_2m_max: [],
		temperature_2m_min: [],
		sunrise: [],
		sunset: [],
		rain_sum: [],
		time: [],
		weather_code: [1, 48, 51, 61, 71, 85],
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

export const getIcon_badMockdata: GetWeatherResponse = {
	current: {},
	daily: {
		temperature_2m_max: [],
		temperature_2m_min: [],
		sunrise: [],
		sunset: [],
		rain_sum: [],
		time: [],
		weather_code: [111, 483, 521, 661, 771, 885],
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

export const getIcon_emptyMockdata: GetWeatherResponse = {
	current: {},
	daily: {
		temperature_2m_max: [],
		temperature_2m_min: [],
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
