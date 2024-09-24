<script setup lang="ts">
import arrowUp from "../assets/icons/arrowUp.svg";
import arrowDown from "../assets/icons/arrowDown.svg";
import sunIcon from "../assets/icons/sunIcon.svg";
import rainIcon from "../assets/icons/rainIcon.svg";
import windIcon from "../assets/icons/windIcon.svg";
import {
	averageTemp,
	formatDate,
	getDescription,
	getIcon,
	getSunrise,
	getSunset,
	getWeekday,
} from "../services/weatherFunctions/weatherFunctions";
import { GetWeatherResponse } from "../types/openMateo.types";

const props = defineProps<{
	time: string;
	index: number;
	weatherData: GetWeatherResponse;
}>();
</script>

<template>
	<div class="card">
		<div class="upper-wrapper">
			<img
				class="weather-icon"
				:src="`src/assets/icons/${getIcon(index, weatherData)}.svg`"
				:alt="getDescription(index, weatherData)"
			/>
			<div class="short-info-wrapper">
				<p>{{ getWeekday(time) }}</p>
				<hr color="#2c67f2" />
				<p>{{ formatDate(time) }}</p>
			</div>
			<p class="midtemp">{{ averageTemp(index, weatherData) }} °C</p>
		</div>
		<hr color="#2c67f2" />
		<div class="lower-wrapper">
			<div class="inside-wrapper">
				<div class="outer-icon-text">
					<img :src="rainIcon" alt="" />
					<div class="align-text">
						<p>{{ weatherData.daily.rain_sum[index] }} mm/day</p>
						<p>Rain</p>
					</div>
				</div>
				<div class="icon-text">
					<div class="icon-suns">
						<img :src="sunIcon" alt="" />
						<img :src="arrowUp" alt="" />
					</div>
					<p>
						{{ getSunrise(index, weatherData) }}
					</p>
				</div>
			</div>
			<div class="inside-wrapper">
				<div class="outer-icon-text">
					<img :src="windIcon" alt="" />
					<div class="align-text">
						<p>{{ weatherData.daily.wind_speed_10m_max[index] }} km/h</p>
						<p>Wind</p>
					</div>
				</div>
				<div class="icon-text">
					<div class="icon-suns">
						<img :src="arrowDown" alt="" />
						<img :src="sunIcon" alt="" />
					</div>
					<p>
						{{ getSunset(index, weatherData) }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
