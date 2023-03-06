let car = {
    manifacturer: 'Ford',
    model: 'F-150',
    build: 2023,
    avarageSpeed: 120,
    consumption: 12,
    fuelTank: 100,
    drivers: [],
}

let distance;
let timeForTransportationWithBrakes;
let timeForTransportationMinutes;
let totalFuelConsumption;

let minimumButton = document.querySelector('.minimum-button');
let driverTimes = document.querySelector('.driver-times');
let fuelConsamption = document.querySelector('.fuel-consumption');


function carInfo() {
    console.log(`--------------`);
    console.log(`Car Information:`);
    console.log(`--------------`);
    console.log(`Manifacturer: ${car.manifacturer}`);
    console.log(`Model: ${car.model}`);
    console.log(`Years build: ${car.build}`);
    console.log(`Avarage speed: ${car.avarageSpeed}`);
    console.log(`Fuel tank capasity: ${car.fuelTank}`);
    console.log(`Drivers name: ${car.drivers}`);
    console.log(`--------------`);
}

function addDriver(name) {
    console.log(`--------------`);
    car.drivers.push(name);
    console.log(`Driver added: ${name}`);
    console.log(`Drivers name: ${car.drivers}`);
    console.log(`--------------`);
}

function removeDriver(name) {
    console.log(`--------------`);
    car.drivers.splice(car.drivers.indexOf(name), 1);
    console.log(`Driver removed: ${name}`);
    console.log(`Drivers name: ${car.drivers}`);
    console.log(`--------------`);
}

let rounded = function (number) {
    return +number.toFixed(2);
}

function timeCalculatorforDriver() {
    distance = +document.querySelector('.minimum-input').value;
    console.log(`Total distance: ${distance} km`);
    let avarageSpeed = car.avarageSpeed;
    let timeForTransportation = distance / avarageSpeed;
    timeForTransportationMinutes = rounded((timeForTransportation - Math.floor(timeForTransportation)) * 60);
    let timeForTransportationHours = Math.floor(timeForTransportation);
    let totalBrakes = 0;
    console.log(`Time for transportation without rest: ${timeForTransportationHours} hours and ${timeForTransportationMinutes} minutes`);
    if (timeForTransportation > 4) {
        totalBrakes = Math.ceil(timeForTransportationHours / 4);
        console.log(`Total brakes: ${totalBrakes} times`);
    } else {
        totalBrakes = 0;
        console.log(`Total brakes: 0 times`);
    }
    console.log(`--------------`);
    timeForTransportationWithBrakes = totalBrakes + timeForTransportationHours;
    console.log(`Time for transportation with brakes: ${timeForTransportationWithBrakes} hours and ${timeForTransportationMinutes} minutes`);
    console.log(`--------------`);
    let totalFuelConsumption = rounded((distance / 100) * car.consumption);
    console.log(`You will need fuel for this trip: ${totalFuelConsumption} liters`);
    console.log(`--------------`);


    driverTimes.innerHTML = (`Time for transportation with brakes: ${timeForTransportationWithBrakes} hours and ${timeForTransportationMinutes} minutes`);
    fuelConsamption.innerHTML = (`You will need fuel for this trip: ${totalFuelConsumption} liters`);
}


function finalAnswer(){
    console.log(`Minimum`);
    carInfo();
    addDriver('Oleg');
    addDriver('Ivan');
    addDriver('Slava');
    removeDriver('Ivan');
    timeCalculatorforDriver();
    
}

if(minimumButton){
    minimumButton.addEventListener('click', finalAnswer, false);
}

