import { averageTemp_badMockdata, averageTemp_Mockdata, dateString_mockdata, expectedAverageTemp, formatTime_mockdata, getDescription_mockdata, getIcon_badMockdata, getIcon_emptyMockdata, getIcon_mockdata, getSunrise_mockdata, getSunriseAndSunset_Mockdata, getSunset_mockdata, getWeatherCodes_mockdata, getWeekday_mockdata, } from "./mockdata";
import { averageTemp, formatDate, formatTime, getDescription, getIcon, getSunrise, getSunset, getWeekday, } from "./weatherFunctions";
// formatTime
describe("formatTime", () => {
    test("should return the correct time format", () => {
        formatTime_mockdata.forEach((data) => {
            expect(formatTime(data.isoDate)).toBe(data.expectedTime);
        });
    });
    test("should throw an error if invalid string is passed", () => {
        expect(() => formatTime("invalid string")).toThrow("Invalid date string");
    });
    test("should throw an error if empty string is passed", () => {
        expect(() => formatTime("")).toThrow("Invalid date string");
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
describe("getWeekday", () => {
    getWeekday_mockdata.forEach((data) => {
        test("should return the right weekday from a datestring", () => {
            expect(getWeekday(data.dateString)).toBe(data.expectedWeekday);
        });
    });
    test("should throw an error if invalid string is passed", () => {
        expect(() => getWeekday("invalid string")).toThrow("Invalid date string");
    });
    test("should throw an error if empty string is passed", () => {
        expect(() => getWeekday("")).toThrow("Invalid date string");
    });
});
// formatDate
describe("formatDate", () => {
    test("should return the correct date format", () => {
        dateString_mockdata.forEach((data) => {
            expect(formatDate(data.dateString)).toBe(data.expectedDate);
        });
    });
    test("should throw an error if invalid string is passed", () => {
        expect(() => formatDate("invalid string")).toThrow("Invalid date string");
    });
    test("should throw an error if empty string is passed", () => {
        expect(() => formatDate("")).toThrow("Invalid date string");
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
        getIcon_mockdata.forEach((data) => {
            const icon = getIcon(data.dayIndex, getWeatherCodes_mockdata);
            expect(icon).toBe(data.expectedIcon);
        });
    });
    test("if unexisting dayIndex", () => {
        expect(() => getIcon(-1, getWeatherCodes_mockdata)).toThrow();
    });
    test("if weather_code is nonexisting", () => {
        getIcon_badMockdata.daily.weather_code.forEach((_, index) => {
            expect(() => getIcon(index, getIcon_badMockdata)).toThrow();
        });
    });
    test("if weatherData is empty", () => {
        getIcon_emptyMockdata.daily.weather_code.forEach((_, index) => {
            expect(() => getIcon(index, getIcon_emptyMockdata)).toBeUndefined();
        });
    });
});
// getDescription
describe("getDescription", () => {
    test("should return the correct description for all given weather codes", () => {
        getDescription_mockdata.forEach((data) => {
            const description = getDescription(data.dayIndex, getWeatherCodes_mockdata);
            expect(description).toBe(data.expectedDescription);
        });
    });
    test("if unexisting dayIndex", () => {
        expect(() => getDescription(-1, getWeatherCodes_mockdata)).toThrow();
    });
    test("if weatherData is empty", () => {
        getIcon_emptyMockdata.daily.weather_code.forEach((_, index) => {
            expect(() => getDescription(index, getIcon_emptyMockdata)).toBeUndefined();
        });
    });
});
