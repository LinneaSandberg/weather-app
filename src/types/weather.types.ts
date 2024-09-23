export interface WeatherConditions {
	[key: number]: { description: string; icon: string };
}

interface WeatherDataValue {
	daily: {
		sunrise: string[];
		sunset: string[];
		weather_code: number[];
		temperature_2m_max: number[];
		temperature_2m_min: number[];
	};
}

export interface WeatherData {
	value: WeatherDataValue | null;
}
