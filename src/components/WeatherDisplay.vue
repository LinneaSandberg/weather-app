<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { fetchWeatherApi } from "openmeteo";
import { getWeather } from "../services/openMateo";
import sunIcon from "../assets/images/sunIcon.svg";
import cloudIcon from "../assets/images/cloudIcon.svg";
import rainIcon from "../assets/images/rainIcon.svg";
import snowIcon from "../assets/images/snowIcon.svg";
import stormIcon from "../assets/images/stormIcon.svg";
import windIcon from "../assets/images/windIcon.svg";
import arrowUp from "../assets/images/arrowUp.svg";
import arrowDown from "../assets/images/arrowDown.svg";
import WeatherCard from "./WeatherCard.vue";

const props = defineProps({
	latitude: Number,
	longitude: Number,
	city: String,
});
const weatherData = ref(null);
const showAllDays = ref(false);

const weatherConditions = {
	0: { description: "Clear sky", icon: sunIcon },
	1: { description: "Mainly clear", icon: sunIcon },
	2: { description: "Partly cloudy", icon: cloudIcon },
	3: { description: "Overcast", icon: cloudIcon },
	45: { description: "Fog", icon: cloudIcon },
	48: { description: "Depositing rime fog", icon: cloudIcon },
	51: { description: "Drizzle: Light intensity", icon: snowIcon },
	53: { description: "Drizzle: Moderate intensity", icon: snowIcon },
	55: { description: "Drizzle: Dense intensity", icon: snowIcon },
	56: {
		description: "Freezing Drizzle: Light intensity",
		icon: snowIcon,
	},
	57: {
		description: "Freezing Drizzle: Dense intensity",
		icon: snowIcon,
	},
	61: { description: "Rain: Slight intensity", icon: rainIcon },
	63: { description: "Rain: Moderate intensity", icon: rainIcon },
	65: { description: "Rain: Heavy intensity", icon: rainIcon },
	66: {
		description: "Freezing Rain: Light intensity",
		icon: rainIcon,
	},
	67: {
		description: "Freezing Rain: Heavy intensity",
		icon: rainIcon,
	},
	71: { description: "Snow fall: Slight intensity", icon: stormIcon },
	73: {
		description: "Snow fall: Moderate intensity",
		icon: stormIcon,
	},
	75: { description: "Snow fall: Heavy intensity", icon: stormIcon },
	77: { description: "Snow grains", icon: stormIcon },
	80: {
		description: "Rain showers: Slight intensity",
		icon: rainIcon,
	},
	81: {
		description: "Rain showers: Moderate intensity",
		icon: rainIcon,
	},
	82: {
		description: "Rain showers: Violent intensity",
		icon: rainIcon,
	},
	85: {
		description: "Snow showers: Slight intensity",
		icon: snowIcon,
	},
	86: {
		description: "Snow showers: Heavy intensity",
		icon: snowIcon,
	},
	95: {
		description: "Thunderstorm: Slight or moderate intensity",
		icon: stormIcon,
	},
	96: {
		description: "Thunderstorm with slight hail",
		icon: stormIcon,
	},
	99: {
		description: "Thunderstorm with heavy hail",
		icon: stormIcon,
	},
};

const fetchWeatherData = async () => {
	if (props.latitude !== null && props.longitude !== null) {
		try {
			const data = await getWeather(props.latitude, props.longitude);

			if (data) {
				console.log("Weather data: ", data);
				weatherData.value = data;
			}
		} catch (error) {
			console.error(error);
		}
	}
};

const formatTime = (isoDate: string) => {
	const getTime = isoDate.split("T")[1];
	return getTime.slice(0, 5);
};

const getSunrise = (index: number) => {
	if (weatherData.value) {
		return formatTime(weatherData.value.daily.sunrise[index]);
	}
};

const getSunset = (index: number) => {
	if (weatherData.value) {
		return formatTime(weatherData.value.daily.sunset[index]);
	}
};

const getIcon = (index: number) => {
	if (weatherData.value) {
		const condition = weatherData.value.daily.weather_code[index];
		return weatherConditions[condition].icon;
	}
	return "";
};

const getDescription = (index: number) => {
	if (weatherData.value) {
		const condition = weatherData.value.daily.weather_code[index];
		return weatherConditions[condition].description;
	}
	return "";
};

const getWeekday = (dateString) => {
	const date = new Date(dateString);
	const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return weekdays[date.getDay()];
};

const formatDate = (dateString) => {
	const date = new Date(dateString);
	const options = { month: "short", day: "numeric" };
	return new Intl.DateTimeFormat("en-US", options).format(date);
};

const midTemp = (index: number) => {
	return (
		Math.round(
			((weatherData.value.daily.temperature_2m_max[index] +
				weatherData.value.daily.temperature_2m_min[index]) /
				2) *
				10
		) / 10
	);
};

watch(
	() => [props.latitude, props.longitude],
	([newLatitude, newLongitude], [oldLatitude, oldLongitude]) => {
		if (newLatitude !== oldLatitude || newLongitude !== oldLongitude) {
			fetchWeatherData();
		}
	}
);

onMounted(() => {
	fetchWeatherData();
});
</script>

<template>
	<div class="weather-display-wrapper">
		<h2 v-if="city">{{ city }}</h2>
		<h2 v-if="!city">No mans land..</h2>

		<button @click="showAllDays = !showAllDays" class="select-button">
			{{ showAllDays ? "Only todays weather" : "Show 7 days weather" }}
		</button>

		<div v-if="weatherData" :class="['list-wrapper', { 'grid-view': showAllDays }]">
			<WeatherCard
				v-for="(time, index) in showAllDays
					? weatherData.daily.time
					: [weatherData.daily.time[0]]"
				:key="index"
				:time="time"
				:index="index"
				:getIcon="getIcon(index)"
				:getDescription="getDescription(index)"
				:weekday="getWeekday(time)"
				:formattedDate="formatDate(time)"
				:midTemp="midTemp(index)"
				:rainSum="weatherData.daily.rain_sum[index]"
				:sunrise="getSunrise(index)"
				:sunset="getSunset(index)"
				:windSpeedMax="weatherData.daily.wind_speed_10m_max[index]"
				:rainIcon="rainIcon"
				:sunIcon="sunIcon"
				:arrowUp="arrowUp"
				:arrowDown="arrowDown"
				:windIcon="windIcon"
				class="card"
			>
			</WeatherCard>
		</div>
	</div>
</template>
