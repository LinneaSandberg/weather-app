<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import WeatherDisplay from "./WeatherDisplay.vue";
import { geocoding } from "../services/openMateo";

const city = ref("");
const data = ref(null);
const latitude = ref(null);
const longitude = ref(null);

const fetchLocationData = async (newCity) => {
	// console.log(`New city: ${newCity}`);

	if (!newCity) {
		return;
	}

	// Fetch data from API
	try {
		// const res = await axios.get(
		// 	`https://geocoding-api.open-meteo.com/v1/search?name=${newCity}&count=1&language=en&format=json`
		// );
		const data = await geocoding(newCity);
		// const responseData = await res.json();
		console.log("data: ", data);

		if (data.results && data.results.length > 0) {
			// console.log("latitude:", res.data.results[0].latitude);
			// console.log("longitude:", res.data.results[0].longitude);

			latitude.value = data.results[0].latitude;
			longitude.value = data.results[0].longitude;
		}
	} catch (error) {
		console.error(error);
	}
};

watch(city, (newCity) => {
	// console.log(`New city: ${newCity}`);
	fetchLocationData(newCity);
});

onMounted(() => {
	const defaultCity = "Berlin";
	// console.log("Component mounted");
	city.value = defaultCity;
	fetchLocationData(defaultCity);
});
</script>

<template>
	<div>
		<p>Searched city: {{ city }}</p>
		<form @submit.prevent="fetchLocationData(city)">
			<label for="search">Search: </label>
			<input type="text" placeholder="Enter a city" id="search" v-model="city" />
			<button type="submit">Submit</button>
		</form>
		<p v-if="latitude">Latitude: {{ latitude }}</p>
		<p v-if="longitude">Longitude: {{ longitude }}</p>
	</div>

	<div v-if="latitude && longitude">
		<WeatherDisplay :latitude="latitude" :longitude="longitude" />
	</div>
</template>
