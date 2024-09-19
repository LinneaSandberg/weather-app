<script setup lang="ts">
import { onMounted, ref } from "vue";
import { fetchWeatherApi } from "openmeteo";
import { getWeather } from "../services/openMateo";

const props = defineProps({ latitude: Number, longitude: Number, city: String });
const weatherData = ref(null);

const fetchWeatherData = async () => {
	try {
		const data = await getWeather(props.latitude, props.longitude);

		if (data) {
			console.log("Weather data: ", data);
			weatherData.value = data;
		}
	} catch (error) {
		console.error(error);
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

const weatherConditions: { number: string } = {
	0: "Clear sky",
	1: "Mainly clear",
	2: "Partly cloudy",
	3: "Overcast",
	45: "Fog",
	48: "Depositing rime fog",
	51: "Drizzle: Light intensity",
	53: "Drizzle: Moderate intensity",
	55: "Drizzle: Dense intensity",
	56: "Freezing Drizzle: Light intensity",
	57: "Freezing Drizzle: Dense intensity",
	61: "Rain: Slight intensity",
	63: "Rain: Moderate intensity",
	65: "Rain: Heavy intensity",
	66: "Freezing Rain: Light intensity",
	67: "Freezing Rain: Heavy intensity",
	71: "Snow fall: Slight intensity",
	73: "Snow fall: Moderate intensity",
	75: "Snow fall: Heavy intensity",
	77: "Snow grains",
	80: "Rain showers: Slight intensity",
	81: "Rain showers: Moderate intensity",
	82: "Rain showers: Violent intensity",
	85: "Snow showers: Slight intensity",
	86: "Snow showers: Heavy intensity",
	95: "Thunderstorm: Slight or moderate intensity",
	96: "Thunderstorm with slight hail",
	99: "Thunderstorm with heavy hail",
};

onMounted(() => {
	console.log("WeatherDisplay component mounted");
	fetchWeatherData();
});
</script>

<template>
	<div class="weather-display-wrapper">
		<h2 v-if="city">{{ city }}</h2>
		<h2 v-if="!city">No mans land..</h2>

		<div v-if="weatherData" class="list-wrapper">
			<div v-for="(time, index) in weatherData.daily.time" :key="index" class="card">
				<h3>{{ time }}</h3>
				<ul>
					<li>
						Max temperature for today:
						{{ weatherData.daily.temperature_2m_max[index] }}°C
					</li>
					<li>
						Min temperature for today:
						{{ weatherData.daily.temperature_2m_min[index] }}°C
					</li>
					<li>
						The sunrise is at: <strong>{{ getSunrise(index) }}</strong>
					</li>
					<li>
						The sunset is at: <strong>{{ getSunset(index) }}</strong>
					</li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
	</div>
</template>
