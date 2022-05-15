import { countries } from "./Model";

// Couldnt use context in Controller
// Very Dissapointed in React
// Need to use parameter like a caveman
export function validateInput(userInput, letter) {
    if(countries.includes(userInput) && userInput.startsWith(letter)){
        return true;
    }
}

export function randomLetter () {
    // 65 - 90
    let rando = Math.floor(Math.random()*26)+65;
    return String.fromCharCode(rando);
}

export function Controller () {
    function testFunction() {
        console.log("Test");
    }
}