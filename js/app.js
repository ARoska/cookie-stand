'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function getRandomIntInclusive(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var firstAndPine = {
    name: '1st and Pine',
    minCust: 23,
    maxCust: 65,
    avgPerCust: 6.3,
    custPerHour: [],
    salesPerHour: [],

    // Generates an estimated average number of customers per hour
    footTraffic: function () {
        var i;

        for (i = 0; i < hours.length; i++) {
            this.custPerHour[i] = getRandomIntInclusive(this.minCust, this.maxCust);
        }
        // Thanks to Tanner for suggesting .push
        return[this.custPerHour.push]; 
    },

    // Multiplies average amount of cookies per customer by average amount of customers per hour, rounds up to nearest integer.
    multiply: function() {
        var i;
        for (i = 0; i < this.custPerHour.length; i++) {
            this.salesPerHour[i] = this.custPerHour[i] * this.avgPerCust;
            this.salesPerHour[i] = Math.ceil(this.salesPerHour[i]);
        }

        return[this.salesPerHour.push];
    }
};

var seaTac = {
    name: 'SeaTac Airport',
    minCust: 3,
    maxCust: 24,
    avgPerCust: 1.2,
    custPerHour: [],
    salesPerHour: [],

    // Generates an estimated average number of customers per hour
    footTraffic: function () {
        var i;

        for (i = 0; i < hours.length; i++) {
            this.custPerHour[i] = getRandomIntInclusive(this.minCust, this.maxCust);
        }

        return[this.custPerHour.push];
    },

    // Multiplies average amount of cookies per customer by average amount of customers per hour, rounds up to nearest integer.
    multiply: function() {
        var i;
        for (i = 0; i < this.custPerHour.length; i++) {
            this.salesPerHour[i] = this.custPerHour[i] * this.avgPerCust;
            this.salesPerHour[i] = Math.ceil(this.salesPerHour[i]);
        }

        return[this.salesPerHour.push];
    }

};

var seaCenter = {
    name: 'Seattle Center',
    minCust: 11,
    maxCust: 38,
    avgPerCust: 3.7,
    custPerHour: [],
    salesPerHour: [],

    // Generates an estimated average number of customers per hour
    footTraffic: function () {
        var i;

        for (i = 0; i < hours.length; i++) {
            this.custPerHour[i] = getRandomIntInclusive(this.minCust, this.maxCust);
        }

        return[this.custPerHour.push];
    },

    // Multiplies average amount of cookies per customer by average amount of customers per hour, rounds up to nearest integer.
    multiply: function() {
        var i;
        for (i = 0; i < this.custPerHour.length; i++) {
            this.salesPerHour[i] = this.custPerHour[i] * this.avgPerCust;
            this.salesPerHour[i] = Math.ceil(this.salesPerHour[i]);
        }

        return[this.salesPerHour.push];
    }

};

var capHill = {
    name: 'Capitol Hill',
    minCust: 20,
    maxCust: 38,
    avgPerCust: 2.8,
    custPerHour: [],
    salesPerHour: [],

    // Generates an estimated average number of customers per hour
    footTraffic: function () {
        var i;

        for (i = 0; i < hours.length; i++) {
            this.custPerHour[i] = getRandomIntInclusive(this.minCust, this.maxCust);
        }

        return[this.custPerHour.push];
    },

    // Multiplies average amount of cookies per customer by average amount of customers per hour, rounds up to nearest integer.
    multiply: function() {
        var i;
        for (i = 0; i < this.custPerHour.length; i++) {
            this.salesPerHour[i] = this.custPerHour[i] * this.avgPerCust;
            this.salesPerHour[i] = Math.ceil(this.salesPerHour[i]);
        }

        return[this.salesPerHour.push];
    }

};

var alki = {
    name: 'Alki Beach',
    minCust: 2,
    maxCust: 16,
    avgPerCust: 4.6,
    custPerHour: [],
    salesPerHour: [],

    // Generates an estimated average number of customers per hour
    footTraffic: function () {
        var i;

        for (i = 0; i < hours.length; i++) {
            this.custPerHour[i] = getRandomIntInclusive(this.minCust, this.maxCust);
        }

        return[this.custPerHour.push];
    },

    // Multiplies average amount of cookies per customer by average amount of customers per hour, rounds up to nearest integer.
    multiply: function() {
        var i;
        for (i = 0; i < this.custPerHour.length; i++) {
            this.salesPerHour[i] = this.custPerHour[i] * this.avgPerCust;
            this.salesPerHour[i] = Math.ceil(this.salesPerHour[i]);
        }

        return[this.salesPerHour.push];
    },
};

firstAndPine.footTraffic();
firstAndPine.multiply();
seaTac.footTraffic();
seaTac.multiply();
seaCenter.footTraffic();
seaCenter.multiply();
capHill.footTraffic();
capHill.multiply();
alki.footTraffic();
alki.multiply();
alki.render();
