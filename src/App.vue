<script setup lang="ts">
import OptionsBar from "./components/OptionsBar.vue";
</script>

<template>
	<header>
		<h1>Weather checker</h1>
		<img
			class="header-img"
			src="./assets/images/elegant-background.jpeg"
			alt="Weather symbols"
		/>
	</header>

	<main>
		<OptionsBar />
	</main>

	<footer>
		<div class="footer-wrapper">
			<p>© Linnea Sandberg</p>
		</div>
	</footer>
</template>
