import { shallowMount } from "@vue/test-utils";
import { expect, describe, it } from "@jest/globals";
import OptionsBar from "../OptionsBar.vue";

describe("OptionsBar", () => {
	it("renders a div", () => {
		const wrapper = shallowMount(OptionsBar);
		expect(wrapper.find("div").exists()).toBe(true);
	});
});
