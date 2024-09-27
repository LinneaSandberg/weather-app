<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { getWeather } from "../services/openMateo";
import WeatherCard from "./WeatherCard.vue";
import { GetWeatherResponse } from "../types/openMateo";

const props = defineProps({
	latitude: Number,
	longitude: Number,
	city: String,
});

const weatherData = ref<null | GetWeatherResponse>(null);
const showAllDays = ref(false);

const fetchWeatherData = async (): Promise<void> => {
	if (props.latitude && props.longitude) {
		try {
			const data = await getWeather(props.latitude, props.longitude);

			console.log("data: ", data);

			if (!data) {
				console.error("Data is empty");
				return;
			}

			weatherData.value = data;
		} catch (error) {
			console.error(error);
		}
	}
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
				:weatherData="weatherData"
				:index="index"
			>
			</WeatherCard>
		</div>
	</div>
</template>
