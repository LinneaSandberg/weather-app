import {
	averageTemp_badMockdata,
	averageTemp_Mockdata,
	expectedAverageTemp,
	getIcon_badMockdata,
	getIcon_emptyMockdata,
	getIcon_mockdata,
} from "./mockdata";
import { averageTemp, getIcon } from "./weatherFunctions";
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
		const expectedIcons = [
			weatherIcons.SUN,
			weatherIcons.CLOUD,
			weatherIcons.WIND,
			weatherIcons.RAIN,
			weatherIcons.STORM,
			weatherIcons.SNOW,
		];

		getIcon_mockdata.daily.weather_code.forEach((_: any, index: number) => {
			const icon = getIcon(index, getIcon_mockdata);
			expect(icon).toBe(expectedIcons[index] as string);
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

// const mockData = [
// 	{ weatherData: getIcon_mockdata, dayIndex: 1, expectedData: weatherIcons.SUN },
// 	{ weatherData: getIcon_mockdata, dayIndex: 2, expectedData: weatherIcons.CLOUD },
// 	{ weatherData: getIcon_mockdata, dayIndex: 3, expectedData: weatherIcons.WIND },
// 	{ weatherData: getIcon_mockdata, dayIndex: 4, expectedData: weatherIcons.RAIN },
// 	{ weatherData: getIcon_mockdata, dayIndex: 5, expectedData: weatherIcons.STORM },
// 	{ weatherData: getIcon_mockdata, dayIndex: 6, expectedData: weatherIcons.SNOW },
// ] as any[];

// mockData.forEach((data) => {
// 	const icon = getIcon(data.dayIndex, data.weatherData);
// 	expect(icon).toBe(data.expectedData);
// });
