<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import WeatherDisplay from "./WeatherDisplay.vue";
import { geocoding } from "../services/openMateo";
import { GeoCodingResponse } from "../types/openMateo";

const city = ref("");
const data = ref<GeoCodingResponse | null>(null);
const latitude = ref<number | null>(null);
const longitude = ref<number | null>(null);
const displayWrapperRef = ref<HTMLElement | null>(null);

const fetchLocationData = async (newCity: string) => {
	if (!newCity) return;

	try {
		const data = await geocoding(newCity);

		if (isLatAndLongExisting(data)) {
			latitude.value = data.results[0].latitude;
			longitude.value = data.results[0].longitude;

			await nextTick();
			if (displayWrapperRef.value) {
				displayWrapperRef.value.scrollIntoView({ behavior: "smooth" });
			}
		}
	} catch (error) {
		console.error(error);
	}
};

const isLatAndLongExisting = (data: GeoCodingResponse) => {
	return data.results.length > 0;
};

onMounted(() => {
	const defaultCity = "";
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

	<div v-if="latitude && longitude" class="display-wrapper" ref="displayWrapperRef">
		<WeatherDisplay :latitude="latitude" :longitude="longitude" :city="city" />
	</div>
</template>
