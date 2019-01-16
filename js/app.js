'use strict';

// var pikeUl = document.getElementById('pike');
// var seaTacUl = document.getElementById('seatac');
// var seaCenterUl = document.getElementById('seacenter');
// var capHillUl =  document.getElementById('caphill');
// var alkiUl = document.getElementById('alki');
var allStores = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var cookieTable = document.getElementById('sales');

function getRandom(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Store(name, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.name = name;
  // this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
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

// Generates an estimated average number of customers per hour
Store.prototype.footTraffic = function() {
  for (var i = 0; i < hours.length; i++) {
    var traffic;
    traffic = getRandom(this.minCustomersPerHour, this.maxCustomersPerHour);
    this.totalCustomersPerHour.push(traffic);
  }
};

// Multiplies average amount of cookies per customer by average amount of customers per hour, rounds up to nearest integer.
Store.prototype.getSalesPerHour = function() {
  for (var i = 0; i < this.totalCustomersPerHour.length; i++) {
    var sales;
    sales = this.totalCustomersPerHour[i] * this.avgCookiesPerCustomer;
    sales = Math.ceil(sales);
    this.salesPerHour.push(sales);
  }
};

// Finds the total amount of cookies sold per day
Store.prototype.cookiesPerDay = function() {
  for (var i = 0; i < this.totalCustomersPerHour.length; i++) {
    var total;
    total = this.totalCookiesPerDay + this.salesPerHour[i];
    this.totalCookiesPerDay = total;
  }
};

function calculateFootTraffic() {
  for(var i = 0; i < allStores.length; i++) {
    allStores[i].footTraffic();
  }
}

function calculateSalesPerHour() {
  for(var i = 0; i < allStores.length; i++) {
    allStores[i].getSalesPerHour();
  }
}

function calculateCookiesPerDay() {
  for(var i = 0; i < allStores.length; i++) {
    allStores[i].cookiesPerDay();
  }
}

Store.prototype.render = function() {
  for (var i = 0; i < this.totalCustomersPerHour.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${this.hours[i]}: ${this.salesPerHour[i]} cookies`;
    pikeUl.appendChild(liEl);
  }
  var liEl = document.createElement('li');
  liEl.textContent = `Total: ${this.totalCookiesPerDay} cookies`;
  pikeUl.appendChild(liEl);
};

calculateFootTraffic();
calculateSalesPerHour();
calculateCookiesPerDay();

console.table(allStores);

//
// firstAndPike.footTraffic();
// firstAndPike.multiply();
// firstAndPike.total();
// firstAndPike.render();
