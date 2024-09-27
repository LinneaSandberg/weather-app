import {
	averageTemp_badMockdata,
	averageTemp_Mockdata,
	dateString_mockdata,
	expectedAverageTemp,
	getIcon_badMockdata,
	getIcon_emptyMockdata,
	getIcon_mockdata,
} from "./mockdata";
import { averageTemp, formatDate, getIcon } from "./weatherFunctions";
import weatherIcons from "../../enum/weatherEnum";
import exp from "constants";

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

describe("formatDate", () => {
	// should return the correct date format
	test("should return the correct date format", () => {
		expect(formatDate(dateString_mockdata[1].dateString)).toBe(
			dateString_mockdata[1].expectedDate
		);
		expect(formatDate(dateString_mockdata[2].dateString)).toBe(
			dateString_mockdata[2].expectedDate
		);
		expect(formatDate(dateString_mockdata[3].dateString)).toBe(
			dateString_mockdata[3].expectedDate
		);
		expect(formatDate(dateString_mockdata[4].dateString)).toBe(
			dateString_mockdata[4].expectedDate
		);
		expect(formatDate(dateString_mockdata[5].dateString)).toBe(
			dateString_mockdata[5].expectedDate
		);
		expect(formatDate(dateString_mockdata[6].dateString)).toBe(
			dateString_mockdata[6].expectedDate
		);
	});

	// should throw an error if invalid date is passed
	// should handle empty date
});
