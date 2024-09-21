export interface geoCodingResponse {
	genrationtime_ms: number;
	results: GeoCodingResult[];
}

interface GeoCodingResult {
	admin1: string;
	admin1_id: number;
	admin2: string;
	admin2_id: number;
	country: string;
	country_code: string;
	country_id: number;
	elevation: number;
	feature_code: string;
	id: number;
	latitude: number;
	longitude: number;
	name: string;
	population: number;
	timezone: string;
}

export interface GetWeatherResponse {
	current: Current;
	urrent_units: Current;
	daily: Daily;
	daily_units: Daily;
	elevation: number;
	generationtime: number;
	latitude: number;
	longitude: number;
	timezone: string;
	timezone_abbreviation: string;
	utc_offset_seconds: number;
}

interface Current {
	interval: number | string;
	is_day: number;
	time: string;
}

interface Daily {
	rain_sum: number[];
	sunrise: string[];
	sunset: string[];
	temperature_2m_max: number[];
	temperature_2m_min: number[];
	time: string[];
	weather_code: number[] | string[];
	wind_speed_10m_max: number[];
}
