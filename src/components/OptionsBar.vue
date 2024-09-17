
<script setup>
import { ref, watch } from 'vue'


const city = ref('');
const data = ref(null);
const latitude = ref(null);
const longitude = ref(null);

watch(
    city,
    async (newCity) => {
    console.log(`New city: ${newCity}`);

    if (!newCity) {
        return;
    }

    // Fetch data from API
    try {
    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${newCity}&count=1&language=en&format=json`)
    const responseData = await res.json();
    console.log("responseData: ", responseData);

    if (responseData.results && responseData.results.length > 0) {
        console.log("latitude:", responseData.results[0].latitude);
        console.log("longitude:", responseData.results[0].longitude);

        latitude.value = responseData.results[0].latitude;
        longitude.value = responseData.results[0].longitude;
    }


    } catch (error) {
    console.error(error);
    }

    // },
    // { immediate: true 
    }

);




</script>


<template>
    <div>
        <p>Searched city: {{ city }}</p>
        <form @submit.prevent>
            <label for="search">Search: </label>
            <input id="search" v-model="city">
            <button type="submit">Submit</button>
        </form>
        <p v-if="latitude">Latitude: {{ latitude }}</p>
        <p v-if="longitude">Longitude: {{ longitude }}</p>
    </div>
</template>