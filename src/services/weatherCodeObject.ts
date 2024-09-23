import { WeatherConditions } from "@/types/weather.types";

export const weatherConditions: WeatherConditions = {
	0: { description: "Clear sky", icon: "sunIcon" },
	1: { description: "Mainly clear", icon: "sunIcon" },
	2: { description: "Partly cloudy", icon: "cloudIcon" },
	3: { description: "Overcast", icon: "cloudIcon" },
	45: { description: "Fog", icon: "cloudIcon" },
	48: { description: "Depositing rime fog", icon: "cloudIcon" },
	51: { description: "Drizzle: Light intensity", icon: "windIcon" },
	53: { description: "Drizzle: Moderate intensity", icon: "windIcon" },
	55: { description: "Drizzle: Dense intensity", icon: "windIcon" },
	56: {
		description: "Freezing Drizzle: Light intensity",
		icon: "windIcon",
	},
	57: {
		description: "Freezing Drizzle: Dense intensity",
		icon: "windIcon",
	},
	61: { description: "Rain: Slight intensity", icon: "rainIcon" },
	63: { description: "Rain: Moderate intensity", icon: "rainIcon" },
	65: { description: "Rain: Heavy intensity", icon: "rainIcon" },
	66: {
		description: "Freezing Rain: Light intensity",
		icon: "rainIcon",
	},
	67: {
		description: "Freezing Rain: Heavy intensity",
		icon: "rainIcon",
	},
	71: { description: "Snow fall: Slight intensity", icon: "stormIcon" },
	73: {
		description: "Snow fall: Moderate intensity",
		icon: "stormIcon",
	},
	75: { description: "Snow fall: Heavy intensity", icon: "stormIcon" },
	77: { description: "Snow grains", icon: "stormIcon" },
	80: {
		description: "Rain showers: Slight intensity",
		icon: "rainIcon",
	},
	81: {
		description: "Rain showers: Moderate intensity",
		icon: "rainIcon",
	},
	82: {
		description: "Rain showers: Violent intensity",
		icon: "rainIcon",
	},
	85: {
		description: "Snow showers: Slight intensity",
		icon: "snowIcon",
	},
	86: {
		description: "Snow showers: Heavy intensity",
		icon: "snowIcon",
	},
	95: {
		description: "Thunderstorm: Slight or moderate intensity",
		icon: "stormIcon",
	},
	96: {
		description: "Thunderstorm with slight hail",
		icon: "stormIcon",
	},
	99: {
		description: "Thunderstorm with heavy hail",
		icon: "stormIcon",
	},
};
