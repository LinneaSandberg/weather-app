<script setup lang="ts">
import arrowUp from "/assets/icons/arrowUp.svg";
import arrowDown from "/assets/icons/arrowDown.svg";
import sun from "/assets/icons/sun.svg";
import rain from "/assets/icons/rain.svg";
import wind from "/assets/icons/wind.svg";
import {
	averageTemp,
	formatDate,
	getDescription,
	getIcon,
	getSunrise,
	getSunset,
	getWeekday,
} from "../services/weatherFunctions/weatherFunctions";
import { GetWeatherResponse } from "../types/openMateo";

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
				:src="getIcon(index, weatherData)"
				:alt="getDescription(index, weatherData)"
			/>
			<div class="short-info-wrapper">
				<p>{{ getWeekday(time) }}</p>
				<hr color="#5D576B" />
				<p>{{ formatDate(time) }}</p>
			</div>
			<p class="midtemp">{{ averageTemp(index, weatherData) }} °C</p>
		</div>
		<hr color="#5D576B" />
		<div class="lower-wrapper">
			<div class="inside-wrapper">
				<div class="outer-icon-text">
					<img :src="rain" alt="Rain icon" />
					<div class="align-text">
						<p>{{ weatherData.daily.rain_sum[index] }} mm/day</p>
						<p>Rain</p>
					</div>
				</div>
				<div class="icon-text">
					<div class="icon-suns">
						<img :src="sun" alt="Sun icon" />
						<img :src="arrowUp" alt="Arrow up icon" />
					</div>
					<p>
						{{ getSunrise(index, weatherData) }}
					</p>
				</div>
			</div>
			<div class="inside-wrapper">
				<div class="outer-icon-text">
					<img :src="wind" alt="Wind icon" />
					<div class="align-text">
						<p>{{ weatherData.daily.wind_speed_10m_max[index] }} km/h</p>
						<p>Wind</p>
					</div>
				</div>
				<div class="icon-text">
					<div class="icon-suns">
						<img :src="arrowDown" alt="Arrow down icon" />
						<img :src="sun" alt="Sun icon" />
					</div>
					<p>
						{{ getSunset(index, weatherData) }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
