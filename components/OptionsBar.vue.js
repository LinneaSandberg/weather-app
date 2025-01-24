import { ref, onMounted, nextTick } from "vue";
import WeatherDisplay from "./WeatherDisplay.vue";
import { geocoding } from "../services/openMateo";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
const __VLS_fnComponent = (await import('vue')).defineComponent({});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("search-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (...[$event]) => {
                __VLS_ctx.fetchLocationData(__VLS_ctx.city);
            } }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("search"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("input-submit-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), placeholder: ("Enter a city"), id: ("search"), value: ((__VLS_ctx.city)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), });
    if (__VLS_ctx.latitude && __VLS_ctx.longitude) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("display-wrapper") }, ref: ("displayWrapperRef"), });
        // @ts-ignore navigation for `const displayWrapperRef = ref()`
        __VLS_ctx.displayWrapperRef;
        // @ts-ignore
        [WeatherDisplay,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(WeatherDisplay, new WeatherDisplay({ latitude: ((__VLS_ctx.latitude)), longitude: ((__VLS_ctx.longitude)), city: ((__VLS_ctx.city)), }));
        const __VLS_1 = __VLS_0({ latitude: ((__VLS_ctx.latitude)), longitude: ((__VLS_ctx.longitude)), city: ((__VLS_ctx.city)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    __VLS_styleScopedClasses['search-wrapper'];
    __VLS_styleScopedClasses['input-submit-wrapper'];
    __VLS_styleScopedClasses['display-wrapper'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "displayWrapperRef": __VLS_nativeElements['div'],
    };
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
;
