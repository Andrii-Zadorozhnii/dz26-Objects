function updateClock(n) {
    n = parseInt(n.value);
    // console.log(n);
    return n;
}

function finalTime() {
    console.log(`${time.hours}h:${time.minutes}m:${time.seconds}s`);
    unswer.innerHTML = (`${(time.hours).toFixed(0)}h:${(time.minutes).toFixed(0)}m:${(time.seconds).toFixed(0)}s`);
}

// Variables
let inputHours = document.querySelector(`.hours`);
let inputMinutes = document.querySelector(`.minutes`);
let inputSeconds = document.querySelector(`.seconds`);
let unswer = document.querySelector('.time-unswer')

// List
let time = {
    hours: 0,
    minutes: 0,
    seconds: 0
}

if (inputHours) {
    inputHours.addEventListener(`input`, () => {
        time.hours = updateClock(inputHours);
        finalTime()
    })

}

if (inputMinutes) {
    inputMinutes.addEventListener(`input`, () => {
        time.minutes = updateClock(inputMinutes);
        finalTime()
    })
}

if (inputSeconds) {
    inputSeconds.addEventListener(`input`, () => {
        time.seconds = updateClock(inputSeconds);
        finalTime()
    })
}

// Add time Calculations
let inputPlusHours = document.querySelector(`.plus-time__hour-input`);
let inputPlusMinutes = document.querySelector(`.plus-time__minutes-input`);
let inputPlusSeconds = document.querySelector(`.plus-time__seconds-input`);

let newHours;
let newMinutes;
let newSeconds;

if (inputPlusHours) {
    inputPlusHours.addEventListener(`input`, () => {
        {
            time.hours += updateClock(inputPlusHours);
            console.log(time.hours);
            finalTime()
        }
    })
}

if (inputPlusMinutes) {
    inputPlusMinutes.addEventListener(`input`, () => {
        if ((time.minutes + updateClock(inputPlusMinutes)) >= 60) {
            time.hours = time.hours + Math.floor((time.minutes + updateClock(inputPlusMinutes)) / 60);

            time.minutes = (time.minutes + updateClock(inputPlusMinutes)) % 60;

            finalTime()
        } else {
            time.minutes = time.minutes + updateClock(inputPlusMinutes);
            finalTime()
        }
    })
}

if (inputPlusSeconds) {
    inputPlusSeconds.addEventListener(`input`, () => {
        if ((time.minutes + (time.seconds + updateClock(inputPlusSeconds)) / 3600) >= 60) {
            console.log("1");
            time.hours = time.hours + Math.floor((time.minutes + (time.seconds + updateClock(inputPlusSeconds)) / 3600) / 60);
            finalTime()

            if ((Math.floor(time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 3600) / 60)) >= 60) {
                time.hours = time.hours + Math.floor((Math.floor(time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 3600) / 60)) / 60)
                finalTime()
            } else {
                time.minutes = Math.floor(time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 3600) / 60);
                console.log('hello')

                time.seconds = (time.seconds + updateClock(inputPlusSeconds)) % 60

                finalTime()
            }

        } else if ((time.seconds + (updateClock(inputPlusSeconds))) >= 60) {

            if ((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) >= 60) {
                time.hours = time.hours + Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60)

                time.minutes = Math.floor((((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60) - (Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60))) * 60);
                finalTime()

                if ((time.seconds + (((((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60) - (Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60))) * 60) - Math.floor((((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60) - (Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60))) * 60)) * 60) >= 60) {

                    if (((time.minutes + Math.floor((((((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60) - (Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60))) * 60) - Math.floor((((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60) - (Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60))) * 60)) * 60))) > 60) {

                        time.hours = time.hours + Math.floor(((time.minutes + Math.floor((((((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60) - (Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60))) * 60) - Math.floor((((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60) - (Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60))) * 60)) * 60))))

                        time.minutes = ((((time.minutes + Math.floor((((((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60) - (Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60))) * 60) - Math.floor((((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60) - (Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60))) * 60)) * 60)))) - Math.floor(((time.minutes + Math.floor((((((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60) - (Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60))) * 60) - Math.floor((((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60) - (Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60))) * 60)) * 60))))) * 60

                        finalTime()
                    }

                    time.minutes = (time.minutes + Math.floor((((((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60) - (Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60))) * 60) - Math.floor((((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60) - (Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60))) * 60)) * 60))

                    time.seconds = (((((((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60) - (Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60))) * 60) - Math.floor((((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60) - (Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60))) * 60)) * 60) - (Math.floor((((((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60) - (Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60))) * 60) - Math.floor((((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60) - (Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60))) * 60)) * 60))) * 60;

                    finalTime()
                } else {
                    time.seconds = time.seconds + (((((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60) - (Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60))) * 60) - Math.floor((((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60) - (Math.floor((time.minutes + ((time.seconds + updateClock(inputPlusSeconds)) / 60)) / 60))) * 60)) * 60
                    finalTime()
                    console.log("3")
                }

            } else {
                time.minutes = time.minutes + Math.floor((time.seconds + updateClock(inputPlusSeconds)) / 60);

                time.seconds = (time.seconds + updateClock(inputPlusSeconds)) % 60;
                console.log('hello2')
                finalTime()
            }
        } else {
            time.seconds = time.seconds + updateClock(inputPlusSeconds);
            finalTime()
        }
    })
}

