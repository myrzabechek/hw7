class Cars {
    constructor(model, color, wheels) {
        this.model = model;
        this.color = color;
        this.wheels = wheels;
    }

    start() {
        console.log(`Машина ${this.model} заведена`);
    }
}

class Mercedes extends Cars {
    constructor(model, color, wheels, abs) {
        super(model, color, wheels);
        this.abs = abs;
    }
}

class BMW extends Cars {
    constructor(model, color, wheels, drivingMode) {
        super(model, color, wheels);
        this.drivingMode = drivingMode;
    }
}

class Audi extends Cars {
    constructor(model, color, wheels, quattroSystem) {
        super(model, color, wheels);
        this.quattroSystem = quattroSystem;
    }
}


const car1 = new Mercedes('Mercedes e63 amg', 'Black', 4, 'abs on');
const car2 = new BMW('BMW M5', 'Blue', 4, 'Sport');
const car3 = new Audi('Audi RS7', 'White', 4, true);

car1.start(); 
car2.start();
car3.start();





// const div = document.querySelector('.main-block')
// const light = document.querySelectorAll('.color')

// let color = prompt('write color')

// let trafficLight = (color) =>{
//     if (color === 'red') {
//         light[0].style.backgroundColor = 'red'
//     } else if (color === 'yellow') {
//         light[1].style.backgroundColor = 'yellow'
//     } else if (color === 'green') {
//         light[2].style.backgroundColor = 'green'
//     } 
// }

// trafficLight(color)


class TrafficLight {
    constructor() {
        this.lightElements = document.querySelectorAll('.color');
    }

    changeColor(color) {
        this.lightElements.forEach(light => {
            light.style.backgroundColor = ''; 
        });

        if (color === 'red') {
            this.lightElements[0].style.backgroundColor = 'red';
        } else if (color === 'yellow') {
            this.lightElements[1].style.backgroundColor = 'yellow';
        } else if (color === 'green') {
            this.lightElements[2].style.backgroundColor = 'green';
        } else {
            console.log('Неверный цвет');
        }
    }
}


const trafficLight = new TrafficLight();

let color = prompt('write color');

trafficLight.changeColor(color);
