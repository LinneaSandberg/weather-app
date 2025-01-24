import { onMounted, ref, watch } from "vue";
import { getWeather } from "../services/openMateo";
import WeatherCard from "./WeatherCard.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    latitude: Number,
    longitude: Number,
    city: String,
});
const weatherData = ref(null);
const showAllDays = ref(false);
const fetchWeatherData = async () => {
    if (props.latitude && props.longitude) {
        try {
            const data = await getWeather(props.latitude, props.longitude);
            if (!data) {
                console.error("Data is empty");
                return;
            }
            weatherData.value = data;
        }
        catch (error) {
            console.error(error);
        }
    }
};
watch(() => [props.latitude, props.longitude], ([newLatitude, newLongitude], [oldLatitude, oldLongitude]) => {
    if (newLatitude !== oldLatitude || newLongitude !== oldLongitude) {
        fetchWeatherData();
    }
});
onMounted(() => {
    fetchWeatherData();
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        latitude: Number,
        longitude: Number,
        city: String,
    },
});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("weather-display-wrapper") }, });
    if (__VLS_ctx.city) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        (__VLS_ctx.city);
    }
    if (!__VLS_ctx.city) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.showAllDays = !__VLS_ctx.showAllDays;
            } }, ...{ class: ("select-button") }, });
    (__VLS_ctx.showAllDays ? "Only todays weather" : "Show 7 days weather");
    if (__VLS_ctx.weatherData) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((['list-wrapper', { 'grid-view': __VLS_ctx.showAllDays }])) }, });
        for (const [time, index] of __VLS_getVForSourceType((__VLS_ctx.showAllDays
            ? __VLS_ctx.weatherData.daily.time
            : [__VLS_ctx.weatherData.daily.time[0]]))) {
            // @ts-ignore
            [WeatherCard, WeatherCard,];
            // @ts-ignore
            const __VLS_0 = __VLS_asFunctionalComponent(WeatherCard, new WeatherCard({ key: ((index)), time: ((time)), weatherData: ((__VLS_ctx.weatherData)), index: ((index)), }));
            const __VLS_1 = __VLS_0({ key: ((index)), time: ((time)), weatherData: ((__VLS_ctx.weatherData)), index: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        }
    }
    __VLS_styleScopedClasses['weather-display-wrapper'];
    __VLS_styleScopedClasses['select-button'];
    __VLS_styleScopedClasses['list-wrapper'];
    __VLS_styleScopedClasses['grid-view'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            WeatherCard: WeatherCard,
            weatherData: weatherData,
            showAllDays: showAllDays,
        };
    },
    props: {
        latitude: Number,
        longitude: Number,
        city: String,
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        latitude: Number,
        longitude: Number,
        city: String,
    },
});
;
