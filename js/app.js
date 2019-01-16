'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var pikeUl = document.getElementById('pike');
var seaTacUl = document.getElementById('seatac');
var seaCenterUl = document.getElementById('seacenter');
var capHillUl =  document.getElementById('caphill');
var alkiUl = document.getElementById('alki');

function randomCustomers(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var firstAndPike = {
  name: '1st and Pike',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiesPerCustomer: 6.3,
  customersPerHour: [],
  salesPerHour: [],
  totalDailyCookies: 0,

  // Generates an estimated average number of customers per hour.
  calcCustomersPerHour: function () {
    var i;

    for (i = 0; i < hours.length; i++) {
      this.customersPerHour[i] = randomCustomers(this.minCustomersPerHour, this.maxCustomersPerHour);
    }
    // Thanks to Tanner for suggesting .push
    return[this.customersPerHour.push];
  },

  // Multiplies average amount of cookies per customer by average amount of customers per hour, rounds up to nearest integer.
  calcSalesPerHour: function() {
    var i;

    for (i = 0; i < this.customersPerHour.length; i++) {
      this.salesPerHour[i] = this.customersPerHour[i] * this.avgCookiesPerCustomer;
      this.salesPerHour[i] = Math.ceil(this.salesPerHour[i]);
    }
    return[this.salesPerHour.push];
  },

  // Adds each hour's cookie sales to find the total amount of cookies sold per day.
  calcTotalDailyCookies: function() {
    var i;

    for (i = 0; i < this.customersPerHour.length; i++) {
      this.totalDailyCookies = this.totalDailyCookies + this.salesPerHour[i];
    }
    return[this.totalDailyCookies];
  },

  render: function() {
    var i;

    for (i = 0; i < this.customersPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
      pikeUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalDailyCookies} cookies`;
    pikeUl.appendChild(liEl);
  }
};

var seaTac = {
  name: 'SeaTac Airport',
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  customersPerHour: [],
  salesPerHour: [],
  totalDailyCookies: 0,

  // Generates an estimated average number of customers per hour
  calcCustomersPerHour: function () {
    var i;

    for (i = 0; i < hours.length; i++) {
      this.customersPerHour[i] = randomCustomers(this.minCustomersPerHour, this.maxCustomersPerHour);
    }
    return[this.customersPerHour.push];
  },

  // Multiplies average amount of cookies per customer by average amount of customers per hour, rounds up to nearest integer.
  calcSalesPerHour: function() {
    var i;

    for (i = 0; i < this.customersPerHour.length; i++) {
      this.salesPerHour[i] = this.customersPerHour[i] * this.avgCookiesPerCustomer;
      this.salesPerHour[i] = Math.ceil(this.salesPerHour[i]);
    }
    return[this.salesPerHour.push];
  },

  // Adds each hour's cookie sales to find the total amount of cookies sold per day.
  calcTotalDailyCookies: function() {
    var i;

    for (i = 0; i < this.customersPerHour.length; i++) {
      this.totalDailyCookies = this.totalDailyCookies + this.salesPerHour[i];
    }
    return[this.totalDailyCookies];
  },

  render: function() {
    var i;

    for (i = 0; i < this.customersPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
      seaTacUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalDailyCookies} cookies`;
    seaTacUl.appendChild(liEl);
  }
};

var seaCenter = {
  name: 'Seattle Center',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 3.7,
  customersPerHour: [],
  salesPerHour: [],
  totalDailyCookies: 0,

  // Generates an estimated average number of customers per hour
  calcCustomersPerHour: function () {
    var i;

    for (i = 0; i < hours.length; i++) {
      this.customersPerHour[i] = randomCustomers(this.minCustomersPerHour, this.maxCustomersPerHour);
    }
    return[this.customersPerHour.push];
  },

  // Multiplies average amount of cookies per customer by average amount of customers per hour, rounds up to nearest integer.
  calcSalesPerHour: function() {
    var i;

    for (i = 0; i < this.customersPerHour.length; i++) {
      this.salesPerHour[i] = this.customersPerHour[i] * this.avgCookiesPerCustomer;
      this.salesPerHour[i] = Math.ceil(this.salesPerHour[i]);
    }
    return[this.salesPerHour.push];
  },

  // Adds each hour's cookie sales to find the total amount of cookies sold per day.
  calcTotalDailyCookies: function() {
    var i;

    for (i = 0; i < this.customersPerHour.length; i++) {
      this.totalDailyCookies = this.totalDailyCookies + this.salesPerHour[i];
    }
    return[this.totalDailyCookies];
  },

  render: function() {
    var i;

    for (i = 0; i < this.customersPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
      seaCenterUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalDailyCookies} cookies`;
    seaCenterUl.appendChild(liEl);
  }
};

var capHill = {
  name: 'Capitol Hill',
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 2.8,
  customersPerHour: [],
  salesPerHour: [],
  totalDailyCookies: 0,

  // Generates an estimated average number of customers per hour
  calcCustomersPerHour: function () {
    var i;

    for (i = 0; i < hours.length; i++) {
      this.customersPerHour[i] = randomCustomers(this.minCustomersPerHour, this.maxCustomersPerHour);
    }
    return[this.customersPerHour.push];
  },

  // Multiplies average amount of cookies per customer by average amount of customers per hour, rounds up to nearest integer.
  calcSalesPerHour: function() {
    var i;

    for (i = 0; i < this.customersPerHour.length; i++) {
      this.salesPerHour[i] = this.customersPerHour[i] * this.avgCookiesPerCustomer;
      this.salesPerHour[i] = Math.ceil(this.salesPerHour[i]);
    }
    return[this.salesPerHour.push];
  },

  // Adds each hour's cookie sales to find the total amount of cookies sold per day.
  calcTotalDailyCookies: function() {
    var i;

    for (i = 0; i < this.customersPerHour.length; i++) {
      this.totalDailyCookies = this.totalDailyCookies + this.salesPerHour[i];
    }
    return[this.totalDailyCookies];
  },

  render: function() {
    var i;

    for (i = 0; i < this.customersPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
      capHillUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalDailyCookies} cookies`;
    capHillUl.appendChild(liEl);
  }
};

var alki = {
  name: 'Alki Beach',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiesPerCustomer: 4.6,
  customersPerHour: [],
  salesPerHour: [],
  totalDailyCookies: 0,

  // Generates an estimated average number of customers per hour
  calcCustomersPerHour: function () {
    var i;

    for (i = 0; i < hours.length; i++) {
      this.customersPerHour[i] = randomCustomers(this.minCustomersPerHour, this.maxCustomersPerHour);
    }
    return[this.customersPerHour.push];
  },

  // Multiplies average amount of cookies per customer by average amount of customers per hour, rounds up to nearest integer.
  calcSalesPerHour: function() {
    var i;

    for (i = 0; i < this.customersPerHour.length; i++) {
      this.salesPerHour[i] = this.customersPerHour[i] * this.avgCookiesPerCustomer;
      this.salesPerHour[i] = Math.ceil(this.salesPerHour[i]);
    }
    return[this.salesPerHour.push];
  },

  // Adds each hour's cookie sales to find the total amount of cookies sold per day.
  calcTotalDailyCookies: function() {
    var i;

    for (i = 0; i < this.customersPerHour.length; i++) {
      this.totalDailyCookies = this.totalDailyCookies + this.salesPerHour[i];
    }
    return[this.totalDailyCookies];
  },

  render: function() {
    var i;
    for (i = 0; i < this.customersPerHour.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
      alkiUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalDailyCookies} cookies`;
    alkiUl.appendChild(liEl);
  }
};

firstAndPike.calcCustomersPerHour();
firstAndPike.calcSalesPerHour();
firstAndPike.calcTotalDailyCookies();
firstAndPike.render();

seaTac.calcCustomersPerHour();
seaTac.calcSalesPerHour();
seaTac.calcTotalDailyCookies();
seaTac.render();

seaCenter.calcCustomersPerHour();
seaCenter.calcSalesPerHour();
seaCenter.calcTotalDailyCookies();
seaCenter.render();

capHill.calcCustomersPerHour();
capHill.calcSalesPerHour();
capHill.calcTotalDailyCookies();
capHill.render();

alki.calcCustomersPerHour();
alki.calcSalesPerHour();
alki.calcTotalDailyCookies();
alki.render();
