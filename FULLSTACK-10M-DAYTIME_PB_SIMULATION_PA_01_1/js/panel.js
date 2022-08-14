
//IMPORTANT NOTE: YOU DON'T NEED TO MODIFY THIS FILE

import{DEFAULT_ROOM_TEMPERATURE, DEFAULT_SET_TEMPERATURE} from "./init.js";

export const setTemperatureElement = document.querySelector("#set-temperature-num");
export const roomTemperatureElement = document.querySelector("#temperature-num")
export const middle = document.getElementById("middle")


const panelElement = document.querySelector("#thermostat-panel")

export function isPanelOn() {
    const turnOnOffButtonElement = document.querySelector("#on-off-toggle-btn-input");
    // return if the button value equals on
    // (if the button value is on, return true, but if the value is off, return false)
    return turnOnOffButtonElement.value === "on";
}

export function turnOnOff(event) {
    /**
     * Turn the device on or off.
     * @param event - After the user clicked on the on/off switch, this describes the event of the click. (Is the switch on or off state now?)
     */
    if (event.target.value === "on") {
        //it is getting turned off
        turnScreenOff();
    } else {
        //it is getting turned on
        turnScreenOn();
    }
    event.target.value = event.target.value === "on" ? "off" : "on";
}

function turnScreenOn() {
    /**
     * Set the color of the panel to the color "olive".
     * Set the default value of the set temperature.
     * Set the default value of the room temperature.
     */
    panelElement.style.backgroundColor = "olive";
    setTemperatureElement.innerText = DEFAULT_SET_TEMPERATURE;
    roomTemperatureElement.innerText = DEFAULT_ROOM_TEMPERATURE;
}
export function changeBack(){
    if(roomTemperatureElement.innerText < 20){
        panelElement.style.backgroundColor = "green";
    }else if (roomTemperatureElement.innerText > 22){
    panelElement.style.backgroundColor = "blue"; 
    }else{
        panelElement.style.backgroundColor = "olive";
    } 
}
function turnScreenOff() {
    /**
     * Set the color of the panel to the color "dimgray".
     * Set the value of the set temperature to "--" showing that the device is off.
     * Set the value of the room temperature to "--" showing that the device is off.
     */
    panelElement.style.backgroundColor = "dimgray"
    setTemperatureElement.innerText = "--";
    roomTemperatureElement.innerText = "--";
}

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


//refactor
export function formatTemperatureValue(temperatureValue) {
    /**
     * Formats temperature values, to make sure they are Float types with 1 digits after the decimal point.
     */
    return parseFloat(temperatureValue).toFixed(1)
}


