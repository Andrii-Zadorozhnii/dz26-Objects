let inputHours = document.querySelector(`.hours`);
let inputMinutes = document.querySelector(`.minutes`);
let inputSeconds = document.querySelector(`.seconds`);
let enteredTime = document.querySelector(`.entered-time`);

if (inputHours === undefined || inputMinutes === undefined || inputSeconds === undefined) {
    console.log(`Please enter a value for hours, minutes and seconds`);
}

let time = {
    hours: parseInt(inputHours),
    minutes : parseInt(inputMinutes),
    seconds: parseInt(inputSeconds)
}

function updateClock(n) {
    n = parseInt(n.value);
    console.log(n);
}

if (inputMinutes){
    inputHours.addEventListener(`input`, () => {
        updateClock(inputHours);
    })
}

if (inputMinutes){
    inputMinutes.addEventListener(`input`, () => {
        updateClock(inputMinutes);
    })
}

if (inputSeconds){
    inputSeconds.addEventListener(`input`, () => {
        updateClock(inputSeconds);
    })
}

if( time.hours === null || time.minutes === null || time.seconds === null){
    enteredTime.innerHTML = `please enter a value for hours, minutes and seconds`;
} else{
    enteredTime.innerHTML = `${time.hours}:${time.minutes}:${time.seconds}`;
}




// let inputHours = (+document.querySelector(`.hours`)).value;
// let inputMinutes = (+document.querySelector(`.minutes`)).value;
// let inputSeconds = (+document.querySelector(`.seconds`)).value;
// let inputTimeButton = document.querySelector(`.avarage-list__button`);

// let time = {
//     hours: inputHours,
//     minutes : inputMinutes,
//     seconds: inputSeconds
// }

// inputTimeButton.onclick = function() {
//     console.log(time);
// }

