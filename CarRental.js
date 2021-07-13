class CarRental {
    constructor(name) {
        this.list = [];
        this.companyName = name;
    }
    intro() {
        let carCount = 0;
        for (let i = 0; i < this.list.length; i++) {
            const car = this.list[i];
            if (car.working) {
                ++carCount;
            }
        }
        console.log(`Hi we are ${this.companyName} and we have ${carCount} cars available`);
    }
    addCar(name, color, price) {
        let car = {
            name, color, price, working: true,
        };
        this.list.push(car);

    }
    carPark() {
        let count = 0;
        for (let i = 0; i < this.list.length; i++) {
            const car = this.list[i];
            if (car.working === true) {
                console.log(`${++count}. ${car.name} (${car.color}) is for ${car.price}EUR/day.`);
            }
        }
    }
    updateCarPrice(index, newPrice) {
        this.list[index].price = newPrice;
    }
    carAccident(index) {
        this.list[index].working = false;

    }
    carRepair(index) {
        this.list[index].working = true;
    }
    removeCar(index) {
        const updatedList = [];

        for (let i = 0; i < this.list.length; i++) {
            const car = this.list[i];
            if (i !== index) {
                updatedList.push(car);
            }

        }
        this.list = updatedList;
    }
    updateCarPrice(index, newPrice) {
        this.list[index].price = newPrice;
    }
}

module.exports = CarRental;