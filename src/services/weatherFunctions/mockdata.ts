import weatherIcons from "../../enum/weatherEnum";
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

export const getWeatherCodes_mockdata: GetWeatherResponse = {
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

export const dateString_mockdata = [
	{ dateString: "2022-07-01T00:00", expectedDate: "Jul 1" },
	{ dateString: "2022-08-01T01:00", expectedDate: "Aug 1" },
	{ dateString: "2022-09-01T02:00", expectedDate: "Sep 1" },
	{ dateString: "2022-10-01T03:00", expectedDate: "Oct 1" },
	{ dateString: "2022-11-01T04:00", expectedDate: "Nov 1" },
	{ dateString: "2022-12-01T05:00", expectedDate: "Dec 1" },
	{ dateString: "2022-01-01T06:00", expectedDate: "Jan 1" },
];

export const formatTime_mockdata = [
	{ isoDate: "2022-07-01T04:15", expectedTime: "04:15" },
	{ isoDate: "2022-08-01T01:30", expectedTime: "01:30" },
	{ isoDate: "2024-09-27T13:30", expectedTime: "13:30" },
	{ isoDate: "2025-10-28T23:59", expectedTime: "23:59" },
];

export const getSunriseAndSunset_Mockdata: GetWeatherResponse = {
	current: {},
	daily: {
		temperature_2m_max: [],
		temperature_2m_min: [],
		sunrise: [
			"2024-09-27T07:03",
			"2024-09-28T07:05",
			"2024-09-29T07:07",
			"2024-09-30T07:09",
			"2024-10-01T07:11",
			"2024-10-02T07:13",
			"2024-10-03T07:15",
		],
		sunset: [
			"2024-09-27T19:03",
			"2024-09-28T19:05",
			"2024-09-29T19:07",
			"2024-09-30T19:09",
			"2024-10-01T19:11",
			"2024-10-02T19:13",
			"2024-10-03T19:15",
		],
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

export const getSunrise_mockdata = [
	{ index: 0, expectedTime: "07:03" },
	{ index: 1, expectedTime: "07:05" },
	{ index: 2, expectedTime: "07:07" },
	{ index: 3, expectedTime: "07:09" },
	{ index: 4, expectedTime: "07:11" },
	{ index: 5, expectedTime: "07:13" },
	{ index: 6, expectedTime: "07:15" },
];

export const getSunset_mockdata = [
	{ index: 0, expectedTime: "19:03" },
	{ index: 1, expectedTime: "19:05" },
	{ index: 2, expectedTime: "19:07" },
	{ index: 3, expectedTime: "19:09" },
	{ index: 4, expectedTime: "19:11" },
	{ index: 5, expectedTime: "19:13" },
	{ index: 6, expectedTime: "19:15" },
];

export const getWeekday_mockdata = [
	{ dateString: "2024-09-24", expectedWeekday: "Tuesday" },
	{ dateString: "2024-09-25", expectedWeekday: "Wednesday" },
	{ dateString: "2024-09-26", expectedWeekday: "Thursday" },
	{ dateString: "2024-09-27", expectedWeekday: "Friday" },
];

export const getIcon_mockdata = [
	{
		dayIndex: 0,
		weatherData: getWeatherCodes_mockdata.daily.weather_code,
		expectedIcon: weatherIcons.SUN, // Assuming this is just the icon name
	},
	{
		dayIndex: 1,
		weatherData: getWeatherCodes_mockdata.daily.weather_code,
		expectedIcon: weatherIcons.CLOUD,
	},
	{
		dayIndex: 2,
		weatherData: getWeatherCodes_mockdata.daily.weather_code,
		expectedIcon: weatherIcons.WIND,
	},
	{
		dayIndex: 3,
		weatherData: getWeatherCodes_mockdata.daily.weather_code,
		expectedIcon: weatherIcons.RAIN,
	},
	{
		dayIndex: 4,
		weatherData: getWeatherCodes_mockdata.daily.weather_code,
		expectedIcon: weatherIcons.STORM,
	},
	{
		dayIndex: 5,
		weatherData: getWeatherCodes_mockdata.daily.weather_code,
		expectedIcon: weatherIcons.SNOW,
	},
];

export const getDescription_mockdata = [
	{
		dayIndex: 0,
		weatherData: getWeatherCodes_mockdata.daily.weather_code,
		expectedDescription: "Mainly clear",
	},
	{
		dayIndex: 1,
		weatherData: getWeatherCodes_mockdata.daily.weather_code,
		expectedDescription: "Depositing rime fog",
	},
	{
		dayIndex: 2,
		weatherData: getWeatherCodes_mockdata.daily.weather_code,
		expectedDescription: "Drizzle: Light intensity",
	},
	{
		dayIndex: 3,
		weatherData: getWeatherCodes_mockdata.daily.weather_code,
		expectedDescription: "Rain: Slight intensity",
	},
	{
		dayIndex: 4,
		weatherData: getWeatherCodes_mockdata.daily.weather_code,
		expectedDescription: "Snow fall: Slight intensity",
	},
	{
		dayIndex: 5,
		weatherData: getWeatherCodes_mockdata.daily.weather_code,
		expectedDescription: "Snow showers: Slight intensity",
	},
];
