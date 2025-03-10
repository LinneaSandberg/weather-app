import arrowUp from "/assets/icons/arrowUp.svg";
import arrowDown from "/assets/icons/arrowDown.svg";
import sun from "/assets/icons/sun.svg";
import rain from "/assets/icons/rain.svg";
import wind from "/assets/icons/wind.svg";
import { averageTemp, formatDate, getDescription, getIcon, getSunrise, getSunset, getWeekday, } from "../services/weatherFunctions/weatherFunctions";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("upper-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("weather-icon") }, src: ((__VLS_ctx.getIcon(__VLS_ctx.index, __VLS_ctx.weatherData))), alt: ((__VLS_ctx.getDescription(__VLS_ctx.index, __VLS_ctx.weatherData))), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("short-info-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.getWeekday(__VLS_ctx.time));
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({ color: ("#5D576B"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.formatDate(__VLS_ctx.time));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("midtemp") }, });
    (__VLS_ctx.averageTemp(__VLS_ctx.index, __VLS_ctx.weatherData));
    __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({ color: ("#5D576B"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("lower-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("inside-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("outer-icon-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.rain)), alt: ("Rain icon"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("align-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.weatherData.daily.rain_sum[__VLS_ctx.index]);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("icon-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("icon-suns") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.sun)), alt: ("Sun icon"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.arrowUp)), alt: ("Arrow up icon"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.getSunrise(__VLS_ctx.index, __VLS_ctx.weatherData));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("inside-wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("outer-icon-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.wind)), alt: ("Wind icon"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("align-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.weatherData.daily.wind_speed_10m_max[__VLS_ctx.index]);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("icon-text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("icon-suns") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.arrowDown)), alt: ("Arrow down icon"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.sun)), alt: ("Sun icon"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.getSunset(__VLS_ctx.index, __VLS_ctx.weatherData));
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['upper-wrapper'];
    __VLS_styleScopedClasses['weather-icon'];
    __VLS_styleScopedClasses['short-info-wrapper'];
    __VLS_styleScopedClasses['midtemp'];
    __VLS_styleScopedClasses['lower-wrapper'];
    __VLS_styleScopedClasses['inside-wrapper'];
    __VLS_styleScopedClasses['outer-icon-text'];
    __VLS_styleScopedClasses['align-text'];
    __VLS_styleScopedClasses['icon-text'];
    __VLS_styleScopedClasses['icon-suns'];
    __VLS_styleScopedClasses['inside-wrapper'];
    __VLS_styleScopedClasses['outer-icon-text'];
    __VLS_styleScopedClasses['align-text'];
    __VLS_styleScopedClasses['icon-text'];
    __VLS_styleScopedClasses['icon-suns'];
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
            arrowUp: arrowUp,
            arrowDown: arrowDown,
            sun: sun,
            rain: rain,
            wind: wind,
            averageTemp: averageTemp,
            formatDate: formatDate,
            getDescription: getDescription,
            getIcon: getIcon,
            getSunrise: getSunrise,
            getSunset: getSunset,
            getWeekday: getWeekday,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
});
;
