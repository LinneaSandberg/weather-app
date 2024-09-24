import { GetWeatherResponse } from "../../types/openMateo.types";
import { weatherConditions } from "../weatherCodeObject";
import {
	averageTemp_badMockdata,
	averageTemp_Mockdata,
	expectedAverageTemp,
	getIcon_mockdata,
} from "./mockdata";
import { averageTemp, getIcon } from "./weatherFunctions";

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
	describe("getIcon", () => {
		test("should return the correct icon for all given weather codes", () => {
			const expectedIcons = [
				"sunIcon",
				"cloudIcon",
				"windIcon",
				"rainIcon",
				"stormIcon",
				"snowIcon",
			];

			getIcon_mockdata.daily.weather_code.forEach((code, index) => {
				const icon = getIcon(index, getIcon_mockdata);
				expect(icon).toBe(expectedIcons[index]);
			});
		});
	});
});
