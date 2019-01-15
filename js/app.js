'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var pikeUl = document.getElementById('pike');
var seaTacUl = document.getElementById('seatac');
var seaCenterUl = document.getElementById('seacenter');
var capHillUl =  document.getElementById('caphill');
var alkiUl = document.getElementById('alki');

function getRandomIntInclusive(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var firstAndPike = {
    name: '1st and Pike',
    minCust: 23,
    maxCust: 65,
    avgPerCust: 6.3,
    custPerHour: [],
    salesPerHour: [],
    totalCookies: 0,

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
    },

        total: function() {
            var i;
            for (i = 0; i < this.custPerHour.length; i++) {
                this.totalCookies = this.totalCookies + this.salesPerHour[i];
            }
            return[this.totalCookies];
        },

    render: function() {
        var i;
        for (i = 0; i < this.custPerHour.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
            pikeUl.appendChild(liEl);
        }
        var liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookies} cookies`;
        pikeUl.appendChild(liEl);
    }

};

var seaTac = {
    name: 'SeaTac Airport',
    minCust: 3,
    maxCust: 24,
    avgPerCust: 1.2,
    custPerHour: [],
    salesPerHour: [],
    totalCookies: 0,

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

    total: function() {
        var i;
        for (i = 0; i < this.custPerHour.length; i++) {
            this.totalCookies = this.totalCookies + this.salesPerHour[i];
        }
        return[this.totalCookies];
    },

    render: function() {
        var i;
        for (i = 0; i < this.custPerHour.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
            seaTacUl.appendChild(liEl);
        }
        var liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookies} cookies`;
        seaTacUl.appendChild(liEl);
    }

};

var seaCenter = {
    name: 'Seattle Center',
    minCust: 11,
    maxCust: 38,
    avgPerCust: 3.7,
    custPerHour: [],
    salesPerHour: [],
    totalCookies: 0,

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

    total: function() {
        var i;
        for (i = 0; i < this.custPerHour.length; i++) {
            this.totalCookies = this.totalCookies + this.salesPerHour[i];
        }
        return[this.totalCookies];
    },

    render: function() {
        var i;
        for (i = 0; i < this.custPerHour.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
            seaCenterUl.appendChild(liEl);
        }
        var liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookies} cookies`;
        seaCenterUl.appendChild(liEl);
    }

};

var capHill = {
    name: 'Capitol Hill',
    minCust: 20,
    maxCust: 38,
    avgPerCust: 2.8,
    custPerHour: [],
    salesPerHour: [],
    totalCookies: 0,
    
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

    total: function() {
        var i;
        for (i = 0; i < this.custPerHour.length; i++) {
            this.totalCookies = this.totalCookies + this.salesPerHour[i];
        }
        return[this.totalCookies];
    },

render: function() {
        var i;
        for (i = 0; i < this.custPerHour.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
            capHillUl.appendChild(liEl);
        }
        var liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookies} cookies`;
        capHillUl.appendChild(liEl);
    }

};

var alki = {
    name: 'Alki Beach',
    minCust: 2,
    maxCust: 16,
    avgPerCust: 4.6,
    custPerHour: [],
    salesPerHour: [],
    totalCookies: 0,

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

    total: function() {
        var i;
        for (i = 0; i < this.custPerHour.length; i++) {
            this.totalCookies = this.totalCookies + this.salesPerHour[i];
        }
        return[this.totalCookies];
    },

    render: function() {
        var i;
        for (i = 0; i < this.custPerHour.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
            alkiUl.appendChild(liEl);
        }
        var liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookies} cookies`;
        alkiUl.appendChild(liEl);
    }
};

firstAndPike.footTraffic();
firstAndPike.multiply();
firstAndPike.total();
firstAndPike.render();

seaTac.footTraffic();
seaTac.multiply();
seaTac.total();
seaTac.render();

seaCenter.footTraffic();
seaCenter.multiply();
seaCenter.total();
seaCenter.render();

capHill.footTraffic();
capHill.multiply();
capHill.total();
capHill.render();

alki.footTraffic();
alki.multiply();
alki.total();
alki.render();
