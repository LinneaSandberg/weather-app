import { ref, onMounted, nextTick } from "vue";
import WeatherDisplay from "./WeatherDisplay.vue";
import { geocoding } from "../services/openMateo";
const city = ref("");
const data = ref(null);
const latitude = ref(null);
const longitude = ref(null);
const displayWrapperRef = ref(null);
const fetchLocationData = async (newCity) => {
    if (!newCity)
        return;
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
    }
    catch (error) {
        console.error(error);
    }
};
const isLatAndLongExisting = (data) => {
    return data.results.length > 0;
};
onMounted(() => {
    const defaultCity = "";
    city.value = defaultCity;
    fetchLocationData(defaultCity);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "search-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
    ...{ onSubmit: (...[$event]) => {
            __VLS_ctx.fetchLocationData(__VLS_ctx.city);
        } },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    for: "search",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "input-submit-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "text",
    placeholder: "Enter a city",
    id: "search",
    value: (__VLS_ctx.city),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    type: "submit",
});
if (__VLS_ctx.latitude && __VLS_ctx.longitude) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "display-wrapper" },
        ref: "displayWrapperRef",
    });
    /** @type {typeof __VLS_ctx.displayWrapperRef} */ ;
    /** @type {[typeof WeatherDisplay, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(WeatherDisplay, new WeatherDisplay({
        latitude: (__VLS_ctx.latitude),
        longitude: (__VLS_ctx.longitude),
        city: (__VLS_ctx.city),
    }));
    const __VLS_1 = __VLS_0({
        latitude: (__VLS_ctx.latitude),
        longitude: (__VLS_ctx.longitude),
        city: (__VLS_ctx.city),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
}
/** @type {__VLS_StyleScopedClasses['search-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['input-submit-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['display-wrapper']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            WeatherDisplay: WeatherDisplay,
            city: city,
            latitude: latitude,
            longitude: longitude,
            displayWrapperRef: displayWrapperRef,
            fetchLocationData: fetchLocationData,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
