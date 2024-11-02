import weatherIcons from "../enum/weatherEnum";
export const weatherConditions = {
    0: { description: "Clear sky", icon: weatherIcons.SUN },
    1: { description: "Mainly clear", icon: weatherIcons.SUN },
    2: { description: "Partly cloudy", icon: weatherIcons.CLOUD },
    3: { description: "Overcast", icon: weatherIcons.CLOUD },
    45: { description: "Fog", icon: weatherIcons.CLOUD },
    48: { description: "Depositing rime fog", icon: weatherIcons.CLOUD },
    51: { description: "Drizzle: Light intensity", icon: weatherIcons.WIND },
    53: { description: "Drizzle: Moderate intensity", icon: weatherIcons.WIND },
    55: { description: "Drizzle: Dense intensity", icon: weatherIcons.WIND },
    56: {
        description: "Freezing Drizzle: Light intensity",
        icon: weatherIcons.WIND,
    },
    57: {
        description: "Freezing Drizzle: Dense intensity",
        icon: weatherIcons.WIND,
    },
    61: { description: "Rain: Slight intensity", icon: weatherIcons.RAIN },
    63: { description: "Rain: Moderate intensity", icon: weatherIcons.RAIN },
    65: { description: "Rain: Heavy intensity", icon: weatherIcons.RAIN },
    66: {
        description: "Freezing Rain: Light intensity",
        icon: weatherIcons.RAIN,
    },
    67: {
        description: "Freezing Rain: Heavy intensity",
        icon: weatherIcons.RAIN,
    },
    71: { description: "Snow fall: Slight intensity", icon: weatherIcons.STORM },
    73: {
        description: "Snow fall: Moderate intensity",
        icon: weatherIcons.STORM,
    },
    75: { description: "Snow fall: Heavy intensity", icon: weatherIcons.STORM },
    77: { description: "Snow grains", icon: weatherIcons.STORM },
    80: {
        description: "Rain showers: Slight intensity",
        icon: weatherIcons.RAIN,
    },
    81: {
        description: "Rain showers: Moderate intensity",
        icon: weatherIcons.RAIN,
    },
    82: {
        description: "Rain showers: Violent intensity",
        icon: weatherIcons.RAIN,
    },
    85: {
        description: "Snow showers: Slight intensity",
        icon: weatherIcons.SNOW,
    },
    86: {
        description: "Snow showers: Heavy intensity",
        icon: weatherIcons.SNOW,
    },
    95: {
        description: "Thunderstorm: Slight or moderate intensity",
        icon: weatherIcons.STORM,
    },
    96: {
        description: "Thunderstorm with slight hail",
        icon: weatherIcons.STORM,
    },
    99: {
        description: "Thunderstorm with heavy hail",
        icon: weatherIcons.STORM,
    },
};
