<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import WeatherDisplay from "./WeatherDisplay.vue";
import { geocoding } from "../services/openMateo";

const city = ref("");
const data = ref(null);
const latitude = ref(null);
const longitude = ref(null);

const fetchLocationData = async (newCity) => {
	if (!newCity) return;

	try {
		const data = await geocoding(newCity);
		console.log("data: ", data);

		if (data.results && data.results.length > 0) {
			latitude.value = data.results[0].latitude;
			longitude.value = data.results[0].longitude;
		}
	} catch (error) {
		console.error(error);
	}
};

onMounted(() => {
	const defaultCity = "Trelleborg";
	city.value = defaultCity;
	fetchLocationData(defaultCity);
});
</script>

<template>
	<div class="search-wrapper">
		<form @submit.prevent="fetchLocationData(city)">
			<label for="search">Search for a city!</label>
			<div class="input-submit-wrapper">
				<input type="text" placeholder="Enter a city" id="search" v-model="city" />
				<button type="submit">Submit</button>
			</div>
		</form>
	</div>

	<div v-if="latitude && longitude" class="display-wrapper">
		<WeatherDisplay :latitude="latitude" :longitude="longitude" :city="city" />
	</div>
</template>
