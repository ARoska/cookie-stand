'use strict';

// var pikeUl = document.getElementById('pike');
// var seaTacUl = document.getElementById('seatac');
// var seaCenterUl = document.getElementById('seacenter');
// var capHillUl =  document.getElementById('caphill');
// var alkiUl = document.getElementById('alki');
var allStores = [];

function getRandomIntInclusive(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Store(name, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
    this.name = name;
    this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.totalCustomersPerHour = [];
    this.salesPerHour = [];
    this.totalCookiesPerDay = 0;
    allStores.push(this);
}

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.3);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

console.table(allStores);

// Generates an estimated average number of customers per hour
Store.prototype.footTraffic = function() {
    for (var i = 0; i < this.hours.length; i++) {
        this.totalCustomersPerHour[i] = getRandomIntInclusive(this.minCustomersPerHour, this.maxCustomersPerHour);
    }
    // Thanks to Tanner for suggesting .push
    return[this.totalCustomersPerHour.push];
};

// Multiplies average amount of cookies per customer by average amount of customers per hour, rounds up to nearest integer.
Store.prototype.multiply = function() {
    for (var i = 0; i < this.totalCustomersPerHour.length; i++) {
        this.salesPerHour[i] = this.totalCustomersPerHour[i] * this.avgCookiesPerCustomer;
        this.salesPerHour[i] = Math.ceil(this.salesPerHour[i]);
    }
    return[this.salesPerHour.push];
};

Store.prototype.totalCookiesPerDay = function() {
    for (var i = 0; i < this.totalCustomersPerHour.length; i++) {
        this.totalCookiesPerDay = this.totalCookiesPerDay + this.salesPerHour[i];
    }
    return[this.totalCookiesPerDay];
};

// Store.prototype.render = function() {
//     for (var i = 0; i < this.totalCustomersPerHour.length; i++) {
//         var liEl = document.createElement('li');
//         liEl.textContent = `${this.hours[i]}: ${this.salesPerHour[i]} cookies`;
//         pikeUl.appendChild(liEl);
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
//     pikeUl.appendChild(liEl);
// }
// 
// firstAndPike.footTraffic();
// firstAndPike.multiply();
// firstAndPike.total();
// firstAndPike.render();
