import arrowUp from "/assets/icons/arrowUp.svg";
import arrowDown from "/assets/icons/arrowDown.svg";
import sun from "/assets/icons/sun.svg";
import rain from "/assets/icons/rain.svg";
import wind from "/assets/icons/wind.svg";
import { averageTemp, formatDate, getDescription, getIcon, getSunrise, getSunset, getWeekday, } from "../services/weatherFunctions/weatherFunctions";
const props = defineProps();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "card" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "upper-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    ...{ class: "weather-icon" },
    src: (__VLS_ctx.getIcon(__VLS_ctx.index, __VLS_ctx.weatherData)),
    alt: (__VLS_ctx.getDescription(__VLS_ctx.index, __VLS_ctx.weatherData)),
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "short-info-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.getWeekday(__VLS_ctx.time));
__VLS_asFunctionalElement(__VLS_intrinsicElements.hr)({
    color: "#5D576B",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.formatDate(__VLS_ctx.time));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "midtemp" },
});
(__VLS_ctx.averageTemp(__VLS_ctx.index, __VLS_ctx.weatherData));
__VLS_asFunctionalElement(__VLS_intrinsicElements.hr)({
    color: "#5D576B",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "lower-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "inside-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "outer-icon-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.rain),
    alt: "Rain icon",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "align-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.weatherData.daily.rain_sum[__VLS_ctx.index]);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "icon-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "icon-suns" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.sun),
    alt: "Sun icon",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.arrowUp),
    alt: "Arrow up icon",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.getSunrise(__VLS_ctx.index, __VLS_ctx.weatherData));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "inside-wrapper" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "outer-icon-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.wind),
    alt: "Wind icon",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "align-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.weatherData.daily.wind_speed_10m_max[__VLS_ctx.index]);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "icon-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "icon-suns" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.arrowDown),
    alt: "Arrow down icon",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: (__VLS_ctx.sun),
    alt: "Sun icon",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
(__VLS_ctx.getSunset(__VLS_ctx.index, __VLS_ctx.weatherData));
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['upper-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['weather-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['short-info-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['midtemp']} */ ;
/** @type {__VLS_StyleScopedClasses['lower-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['inside-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['outer-icon-text']} */ ;
/** @type {__VLS_StyleScopedClasses['align-text']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-text']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-suns']} */ ;
/** @type {__VLS_StyleScopedClasses['inside-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['outer-icon-text']} */ ;
/** @type {__VLS_StyleScopedClasses['align-text']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-text']} */ ;
/** @type {__VLS_StyleScopedClasses['icon-suns']} */ ;
var __VLS_dollars;
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
; /* PartiallyEnd: #4569/main.vue */
