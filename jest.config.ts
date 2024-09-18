import type { Config } from "jest";

const config: Config = {
	preset: "ts-jest",
	testEnvironment: "jest-environment-jsdom",
	transform: {
		"^.+\\.jsx?$": "babel-jest",
		"^.+\\.vue$": "@vue/vue3-jest",
	},
	testEnvironmentOptions: {
		customExportConditions: ["node", "node-addons"],
	},
};

export default config;
