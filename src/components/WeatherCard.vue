<script setup lang="ts">
const props = defineProps({
	time: String,
	index: Number,
	getIcon: String,
	getDescription: String,
	weekday: String,
	formattedDate: String,
	midTemp: Number,
	rainSum: Number,
	sunrise: String,
	sunset: String,
	windSpeedMax: Number,
	rainIcon: String,
	sunIcon: String,
	arrowUp: String,
	arrowDown: String,
	windIcon: String,
});
</script>

<template>
	<div class="card">
		<div class="upper-wrapper">
			<img class="weather-icon" :src="getIcon" :alt="getDescription" />
			<div class="short-info-wrapper">
				<p>{{ weekday }}</p>
				<hr color="#2c67f2" />
				<p>{{ formattedDate }}</p>
			</div>
			<p class="midtemp">{{ midTemp }} °C</p>
		</div>
		<hr color="#2c67f2" />
		<div class="lower-wrapper">
			<div class="inside-wrapper">
				<div class="outer-icon-text">
					<img :src="rainIcon" alt="" />
					<div class="align-text">
						<p>{{ rainSum }} mm/day</p>
						<p>Rain</p>
					</div>
				</div>
				<div class="icon-text">
					<div class="icon-suns">
						<img :src="sunIcon" alt="" />
						<img :src="arrowUp" alt="" />
					</div>
					<p>{{ sunrise }}</p>
				</div>
			</div>
			<div class="inside-wrapper">
				<div class="outer-icon-text">
					<img :src="windIcon" alt="" />
					<div class="align-text">
						<p>{{ windSpeedMax }} km/h</p>
						<p>Wind</p>
					</div>
				</div>
				<div class="icon-text">
					<div class="icon-suns">
						<img :src="arrowDown" alt="" />
						<img :src="sunIcon" alt="" />
					</div>
					<p>{{ sunset }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
