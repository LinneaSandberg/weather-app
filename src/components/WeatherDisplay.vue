<script setup>
import { onMounted, ref } from "vue";
import { fetchWeatherApi } from "openmeteo";
import { getWeather } from "../services/openMateo";

const props = defineProps({ latitude: Number, longitude: Number });
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

onMounted(() => {
	console.log("WeatherDisplay component mounted");
	fetchWeatherData();
});
</script>

<template>
	<div>
		<h2>Weather Display</h2>
		<p v-if="latitude">Latitude: {{ latitude }}</p>
		<p v-if="longitude">Longitude: {{ longitude }}</p>

		<div v-if="weatherData">
			<h3>Weather Forecast</h3>
			<p>Max temperature for today: {{ weatherData.daily.temperature_2m_max[0] }}°C</p>
			<p>Min temperature for today: {{ weatherData.daily.temperature_2m_min[0] }}°C</p>
		</div>
	</div>
</template>
