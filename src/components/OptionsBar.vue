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

// watch(city, (newCity) => {
// 	// console.log(`New city: ${newCity}`);
// 	fetchLocationData(newCity);
// });

onMounted(() => {
	const defaultCity = "Trelleborg";
	city.value = defaultCity;
	fetchLocationData(defaultCity);
});
</script>

<template>
	<div class="search-wrapper">
		<!-- <div class="search-elements-wrapper"> -->
		<!-- <p>Searched city: {{ city }}</p> -->
		<form @submit.prevent="fetchLocationData(city)">
			<label for="search">Search for a city!</label>
			<div class="input-submit-wrapper">
				<input type="text" placeholder="Enter a city" id="search" v-model="city" />
				<button type="submit">Submit</button>
			</div>
		</form>
		<!-- </div> -->
	</div>

	<div v-if="latitude && longitude" class="display-wrapper">
		<WeatherDisplay :latitude="latitude" :longitude="longitude" :city="city" />
	</div>
</template>
