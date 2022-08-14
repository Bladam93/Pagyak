
//IMPORTANT NOTE: YOU DON'T NEED TO MODIFY THIS FILE

import {turnOnOff} from "./panel.js";
import {changeSetTemperature, handleRoomTemperatureChange} from "./thermostat.js";
export const DEFAULT_SET_TEMPERATURE = setDefaultSetTemperature();
export const DEFAULT_ROOM_TEMPERATURE = setDefaultRoomTemperature()

/**
 * Repeatedly calls the handleRoomTemperatureChange function, in every 2000 milliseconds (every 2 seconds).
 */
setInterval(handleRoomTemperatureChange, 2000)

/**
 * Calls the turnOnOff() function every time the user clicks the on/off switch.
 */
document
    .querySelector("#on-off-toggle-btn")
    .addEventListener("click", (event) => {
        turnOnOff(event);
    });

/**
 * Calls the changeSetTemperature(true) function every time the user clicks the "+"-signed (temperature increasing) button.
 */
document
    .querySelector("#increase-temperature-button")
    .addEventListener("click", () => changeSetTemperature(true));

/**
 * Calls the changeSetTemperature(false) function every time the user clicks the "-"-signed (temperature decreasing) button.
 */
document
    .querySelector("#decrease-temperature-button")
    .addEventListener("click", () => changeSetTemperature(false));


//refactor
export function setDefaultRoomTemperature() {
    /**
     * Set a default room temperature from a random number between a default minimum and maximum.
     * @returns The generated random room temperature, fixed to 1 digits after the decimal point..
     */
    const DEFAULT_MAX_TEMP = 24;
    const DEFAULT_MIN_TEMP = 18;
    return Math.floor(Math.random() * (DEFAULT_MAX_TEMP - DEFAULT_MIN_TEMP + 1) + DEFAULT_MIN_TEMP).toFixed(1);
}

//refactor
export function setDefaultSetTemperature() {
    /**
     * Sets the default room setting to 20.0 °C.
     * @returns The float value of 20, fixed to 1 digits after the decimal point (20.0).
     */
    return 20.0.toFixed(1);
}
