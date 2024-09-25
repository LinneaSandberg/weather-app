import {
	averageTemp_badMockdata,
	averageTemp_Mockdata,
	expectedAverageTemp,
	getIcon_mockdata,
} from "./mockdata";
import { averageTemp, getIcon } from "./weatherFunctions";
import { weatherIcons } from "../../enum/weatherEnum";

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
			const mockData = [
				{ weatherData: getIcon_mockdata, dayIndex: 1, expectedData: weatherIcons.SUN },
				{ weatherData: getIcon_mockdata, dayIndex: 2, expectedData: weatherIcons.CLOUD },
				{ weatherData: getIcon_mockdata, dayIndex: 3, expectedData: weatherIcons.WIND },
				{ weatherData: getIcon_mockdata, dayIndex: 4, expectedData: weatherIcons.RAIN },
				{ weatherData: getIcon_mockdata, dayIndex: 5, expectedData: weatherIcons.STORM },
				{ weatherData: getIcon_mockdata, dayIndex: 6, expectedData: weatherIcons.SNOW },
			] as any[];

			mockData.forEach((data) => {
				const icon = getIcon(data.dayIndex, data.weatherData);
				expect(icon).toBe(data.expectedData);
			});

			// getIcon_mockdata.daily.weather_code.forEach((_, index): any => {
			// 	const icon = getIcon(index, getIcon_mockdata);
			// 	expect(icon).toBe(expectedIcons[index]);
			// });
		});
	});
});
