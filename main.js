//Завдача 1

const bankAccount = {
    ownerName: "Sumit Kumar",
    accountNumber: 1234567890,
    balance: 10000,
    deposit: function (amount) {
        this.balance += amount;
        const message = `Депозит ${amount} в ${this.ownerName} акаунт. Баланс: ${this.balance}`;
        console.log(message);
    },
    withdraw: function (amount) {
        if (amount > this.balance) {
            console.log("Не достатньо коштів на рахунку");
        } else {
            this.balance -= amount;
            const message = `Зняття ${amount} з ${this.ownerName} акаунт. Баланс: ${this.balance}`;
            console.log(message);
        }
    }
}

//Задача 2
const weather = {
    temperature: 0,
    humidity: 0,
    windSpeed: 0,
    isBelowZero: function () {
        return this.temperature < 0;
    },
    
    checkTemperature: function () {
        if (this.isBelowZero()) {
            console.log("Температура нижче 0");
        } else {
            console.log("Температура вище 0");
        }
    }
}

weather.temperature = -1;
weather.checkTemperature(); // Температура нижче 0

weather.temperature = 8;
weather.checkTemperature(); // Температура вище 0

//Задача 3
const user = {
    name: "",
    email: "",
    password: "",
    login: function (inputEmail, inputPassword) {
        if (inputEmail === this.email && inputPassword === this.password) {
            console.log("Ви успішно увійшли");
        } else {
            console.log("Помилка входу");
        }
    
    }
}

user.name = "Tom";
user.email = "tomtomashevski12@gmail.com";
user.password = "12345";

//Задача 4
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
    isHighRated: function() {
        return this.rating > 8;
    }
}
console.log(`Title: ${movie.title}`);
console.log(`Director: ${movie.director}`);
console.log(`Year: ${movie.year}`);
console.log(`Rating: ${movie.rating}`);

if (movie.isHighRated()) {
    console.log(`%c${movie.title}`, 'color: green');
} else {
    console.log(movie.title);
}