import {isPanelOn, formatTemperatureValue, changeBack} from "./panel.js"

const setTemperatureElement = document.querySelector("#set-temperature-num");
const roomTemperatureElement = document.querySelector("#temperature-num")

function changeTemperature(roomTemperature, setTemperature) {
    if (setTemperature < roomTemperature) {
        return decreaseTemperature(roomTemperature)
    } else if (setTemperature > roomTemperature) {
        return increaseTemperature(roomTemperature)
    } else {
        console.log("Room temperature equals the set value.")
        return roomTemperature;
    }
}

function increaseTemperature(roomTemperature) {
    console.log("Temperature is increased by 0.5 °C")
    return roomTemperature + 0.5;
}

function decreaseTemperature(roomTemperature) {
    console.log("Room temperature equals the set value.")
    return roomTemperature - 0.5;
}

export function changeSetTemperature(isIncrease) {
    if (isPanelOn()) {

        let setTemperature;
        const currentTemperature = parseFloat(setTemperatureElement.innerText)

        if (isIncrease) {
            setTemperature = increaseSetTemperature(currentTemperature)
        } else {
            setTemperature = decreaseSetTemperature(currentTemperature)
        }

        setTemperatureElement.innerText = formatTemperatureValue(setTemperature);
    } else {
        console.error("Panel is turned off, sorry!");
    }
}

function increaseSetTemperature(setTemperature) {
    console.log("Temperature is set higher by 0.5 °C")
    return setTemperature + 0.5;
}

function decreaseSetTemperature(setTemperature) {
    console.log("Temperature is set lower by 0.5 °C")
    return setTemperature - 0.5;
}

export function handleRoomTemperatureChange() {
    if (isPanelOn()) {
        changeBack()
        let roomTemperature = parseFloat(roomTemperatureElement.innerText);
        let setTemperature = parseFloat(setTemperatureElement.innerText);

        let changedTemperature = changeTemperature(roomTemperature, setTemperature);
        roomTemperatureElement.innerText = formatTemperatureValue(changedTemperature);
    }
}
