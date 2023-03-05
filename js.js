// Оголошення об'єкту автомобіля
let car = {
    manufacturer: 'Tesla',
    model: 'Model S',
    year: 2021,
    avgSpeed: 120,
    fuelTankSize: 75,
    avgFuelConsumption: 20,
    drivers: [],

    // Метод, який виводить на екран інформацію про автомобіль.
    getCarInfo: function () {
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Average speed: ${this.avgSpeed}`);
        console.log(`Fuel tank size: ${this.fuelTankSize}`);
        console.log(`Average fuel consumption: ${this.avgFuelConsumption}`);
        console.log(`Drivers: ${this.drivers.join(", ")}`);
    },

    // Додавання імені водія до списку
    addDriver: function (driverName) {
        this.drivers.push(driverName);
    },

    // Перевірка, чи є ім'я водія у списку
    isDriverInList: function (driverName) {
        return this.drivers.includes(driverName);
    },

    // Метод для розрахунку необхідного часу та кількості палива для подолання переданої відстані з заданою середньою швидкістю
    calculateTravel: function (distance) {
        let totalHours = distance / this.avgSpeed; // загальний час подорожі без перерв
        let restPeriods = Math.floor(totalHours / 4); // загальна кількість перерв
        let drivingTime = totalHours - restPeriods; // загальний час водіння без перерв
        let fuelNeeded = (distance / 100) * this.avgFuelConsumption; // потрібна кількість пального

        console.log(`Total travel time: ${drivingTime.toFixed(2)} hours`);
        console.log(`Total number of rest periods (1 hour each): ${restPeriods}`);
        console.log(`Total fuel needed for the trip: ${fuelNeeded.toFixed(2)} liters`);
    }
};

// Приклад використання методів об'єкту
car.getCarInfo();
car.addDriver('John');
car.addDriver('Kate');
console.log(car.isDriverInList('Bob')); // false
console.log(car.isDriverInList('Kate')); // true
car.calculateTravel(500); 
