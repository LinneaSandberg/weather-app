import {
	averageTemp_badMockdata,
	averageTemp_Mockdata,
	dateString_mockdata,
	expectedAverageTemp,
	formatTime_mockdata,
	getIcon_badMockdata,
	getIcon_emptyMockdata,
	getIcon_mockdata,
	getSunrise_mockdata,
	getSunriseAndSunset_Mockdata,
	getSunset_mockdata,
} from "./mockdata";
import {
	averageTemp,
	formatDate,
	formatTime,
	getIcon,
	getSunrise,
	getSunset,
} from "./weatherFunctions";
import weatherIcons from "../../enum/weatherEnum";

// formatTime
describe("formatTime", () => {
	test("should return the correct time format", () => {
		formatTime_mockdata.forEach((data) => {
			expect(formatTime(data.isoDate)).toBe(data.expectedTime);
		});
	});

	test("should throw an error if invalid string is passed", () => {
		expect(() => formatTime("invalid string")).toThrow();
	});

	test("should throw an error if empty string is passed", () => {
		expect(() => formatTime("")).toThrow();
	});
});

// getSunrise
describe("getSunrise", () => {
	test("should return the correct formatted time for sunrise", () => {
		getSunrise_mockdata.forEach((data) => {
			expect(getSunrise(data.index, getSunriseAndSunset_Mockdata)).toBe(data.expectedTime);
		});
	});
});

// getSunset
describe("getSunset", () => {
	test("should return the correct formatted time for sunset", () => {
		getSunset_mockdata.forEach((data) => {
			expect(getSunset(data.index, getSunriseAndSunset_Mockdata)).toBe(data.expectedTime);
		});
	});
});

// getWeekday

// formatDate
describe("formatDate", () => {
	test("should return the correct date format", () => {
		dateString_mockdata.forEach((data) => {
			expect(formatDate(data.dateString)).toBe(data.expectedDate);
		});
	});

	test("should throw an error if invalid string is passed", () => {
		expect(() => formatDate("invalid string")).toThrow();
	});

	test("should throw an error if empty string is passed", () => {
		expect(() => formatDate("")).toThrow();
	});
});

// averageTemp
describe("averageTemp", () => {
	test("should return the avrage temperature of the max and min temperature for a day", () => {
		const index = 2;
		const weatherData = averageTemp_Mockdata;
		const result = averageTemp(index, weatherData);

		expect(result).toBe(expectedAverageTemp);
	});

	test("if only one temperature is a number and the other is null", () => {
		const index = 2;
		const weatherData = averageTemp_badMockdata;
		const result = averageTemp(index, weatherData);

		expect(result).toBeUndefined();
	});
});

// getIcon
describe("getIcon", () => {
	test("should return the correct icon for all given weather codes", () => {
		const mockdata = [
			{
				dayIndex: 0,
				weatherData: getIcon_mockdata.daily.weather_code,
				expectedIcon: weatherIcons.SUN,
			},
			{
				dayIndex: 1,
				weatherData: getIcon_mockdata.daily.weather_code,
				expectedIcon: weatherIcons.CLOUD,
			},
			{
				dayIndex: 2,
				weatherData: getIcon_mockdata.daily.weather_code,
				expectedIcon: weatherIcons.WIND,
			},
			{
				dayIndex: 3,
				weatherData: getIcon_mockdata.daily.weather_code,
				expectedIcon: weatherIcons.RAIN,
			},
			{
				dayIndex: 4,
				weatherData: getIcon_mockdata.daily.weather_code,
				expectedIcon: weatherIcons.STORM,
			},
			{
				dayIndex: 5,
				weatherData: getIcon_mockdata.daily.weather_code,
				expectedIcon: weatherIcons.SNOW,
			},
		];

		mockdata.forEach((data) => {
			const icon = getIcon(data.dayIndex, getIcon_mockdata);
			expect(icon).toBe(data.expectedIcon);
		});
	});

	test("if unexisting dayIndex", () => {
		expect(() => getIcon(-1, getIcon_mockdata)).toThrow();
	});

	test("if weather_code is nonexisting", () => {
		getIcon_badMockdata.daily.weather_code.forEach((_: any, index: number) => {
			expect(() => getIcon(index, getIcon_badMockdata)).toThrow();
		});
	});

	test("if weatherData is empty", () => {
		getIcon_emptyMockdata.daily.weather_code.forEach((_: any, index: number) => {
			expect(() => getIcon(index, getIcon_emptyMockdata)).toBeUndefined();
		});
	});
});

// getDescription
