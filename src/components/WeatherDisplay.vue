<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { getWeather } from "../services/openMateo";
import arrowUp from "../assets/images/arrowUp.svg";
import arrowDown from "../assets/images/arrowDown.svg";
import WeatherCard from "./WeatherCard.vue";
import { GetWeatherResponse } from "../types/OpenMateo.types";
// import { cityAndPositionprops } from "@/types/weather.types";
import { weatherConditions } from "@/services/weatherCodeObject";
import {
	averageTemp,
	formatDate,
	getDescription,
	getIcon,
	getSunrise,
	getSunset,
	getWeekday,
} from "@/services/weatherFunctions";

const cityAndPositionprops = defineProps({
	latitude: Number,
	longitude: Number,
	city: String,
});

const weatherData = ref<GetWeatherResponse | null>(null);
const showAllDays = ref(false);

const fetchWeatherData = async (): Promise<void> => {
	if (cityAndPositionprops.latitude && cityAndPositionprops.longitude) {
		try {
			const data = await getWeather(
				cityAndPositionprops.latitude,
				cityAndPositionprops.longitude
			);

			if (data) {
				console.log("Weather data: ", data);
				weatherData.value = data;
			}
		} catch (error) {
			console.error(error);
		}
	}
};

watch(
	() => [cityAndPositionprops.latitude, cityAndPositionprops.longitude],
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
				:getIcon="getIcon(index, weatherData)"
				:getDescription="getDescription(index, weatherData)"
				:weekday="getWeekday(time)"
				:formattedDate="formatDate(time)"
				:midTemp="averageTemp(index, weatherData)"
				:rainSum="weatherData.daily.rain_sum[index]"
				:sunrise="getSunrise(index, weatherData)"
				:sunset="getSunset(index, weatherData)"
				:windSpeedMax="weatherData.daily.wind_speed_10m_max[index]"
				:arrowUp="arrowUp"
				:arrowDown="arrowDown"
				class="card"
			>
			</WeatherCard>
		</div>
	</div>
</template>
