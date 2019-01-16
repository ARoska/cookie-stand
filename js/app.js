'use strict';

var cookieTable = document.getElementById('sales');

var allStores = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStoresTotals = [];

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

// function calculateFootTraffic() {
//   for(var i = 0; i < allStores.length; i++) {
//     allStores[i].footTraffic();
//   }
// }

function calculate(figure) {
  for(var i = 0; i < allStores.length; i++) {
    allStores[i].figure();
  }
}

calculate('footTraffic');

// Multiplies average amount of cookies per customer by average amount of customers per hour, rounds up to nearest integer.
Store.prototype.getSalesPerHour = function() {
  for (var i = 0; i < this.totalCustomersPerHour.length; i++) {
    var sales;
    sales = this.totalCustomersPerHour[i] * this.avgCookiesPerCustomer;
    sales = Math.ceil(sales);
    this.salesPerHour.push(sales);
  }
};

function calculateSalesPerHour() {
  for(var i = 0; i < allStores.length; i++) {
    allStores[i].getSalesPerHour();
  }
}

// Finds the total amount of cookies sold per day
Store.prototype.cookiesPerDay = function() {
  for (var i = 0; i < this.totalCustomersPerHour.length; i++) {
    var total;
    total = this.totalCookiesPerDay + this.salesPerHour[i];
    this.totalCookiesPerDay = total;
  }
};

function calculateCookiesPerDay() {
  for(var i = 0; i < allStores.length; i++) {
    allStores[i].cookiesPerDay();
  }
}

// Finds the total amount of cookies sold per hour across all stores
function generatDailySales() {
  var finalTotal = 0;
  for(var i = 0; i < hours.length; i++) {
    var total = 0;
    for(var j = 0; j < allStores.length; j++) {
      total += allStores[j].salesPerHour[i];
    }
    allStoresTotals.push(total);
    finalTotal += total;
  }
  allStoresTotals.push(finalTotal);
}

Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  var tdEl = document.createElement('td');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);
  for(var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.salesPerHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesPerDay;
  trEl.appendChild(tdEl);
  cookieTable.appendChild(trEl);
};

function renderAllSales() {
  for(var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);
  for(var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Totals';
  trEl.appendChild(thEl);
  cookieTable.appendChild(trEl);
}

function makeFooterRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  var tdEl = document.createElement('td');
  thEl.textContent = 'All Store Totals';
  trEl.appendChild(thEl);
  for (var i = 0; i <= hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = allStoresTotals[i];
    trEl.appendChild(tdEl);
  }
  cookieTable.appendChild(trEl);
}

calculateFootTraffic();
calculateSalesPerHour();
calculateCookiesPerDay();
generatDailySales();

makeHeaderRow();
renderAllSales();
makeFooterRow();
