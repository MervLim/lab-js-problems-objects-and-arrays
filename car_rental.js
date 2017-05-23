// Customer Object
var Customer = function (customerInfo) {
  this.name = customerInfo.name;
  this.id = customerInfo.id;
  this.carRented = null;
};

// Car Object
var Car = function (carInfo) {
  this.id = carInfo.id;
  this.producer = carInfo.producer;
  this.model = carInfo.model;
  this.rentalPrice = carInfo.rentalPrice;
  this.available = true;
  this.rentalDuration = 0;
  this.customer = null;

  this.quotePrice = function(rentalDuration){
    var quotePrice = rentalDuration * this.rentalPrice;
    return quotePrice;

  }
  this.reserve = function(customer, rentalDuration){
    if (this.available === true) {
      this.available = false;
      this.customer = customer;
      this.rentalDuration = rentalDuration;
      return true;
    }
    else {
      return false;
    }


  }
  this.return = function () {

  }
};

// Vendor Object
var Vendor = function(name) {
  this.name = name;
  this.cars = [];
  this.customers = [];

  this.findCarIndex = function (carID) {
    return this.cars.findIndex(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.findCustomerIndex = function (customerID) {
    return this.customers.findIndex(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  this.getCar = function (carID) {
    return this.cars.find(function(car){
      return car.id === carID ? true : false ;
    });
  };

  this.getCustomer = function (customerID) {
    return this.customers.find(function(customer){
      return customer.id === customerID ? true : false ;
    });
  };

  this.addCar = function(carObj) {
    if(this.getCar(carObj.id)){
      console.log('ID already exists')
    } else {
      this.cars.push(carObj);
      console.log('Car added to warehouse');
    }
  }
  this.addCustomer = function(customerObj){
    if (this.getCustomer(customerObj.id)){
      console.log('ID already exists');
    } else {
      this.customers.push(customerObj)
      console.log('Customer added to warehouse');
    }
  }

  this.removeCar = function (carID) {
    var carIndex = this.findCarIndex(carID)
    if (carIndex >= 0) {
      this.cars.splice(carIndex, 1);
    } else {
      console.log('Car not found');
    }
  }

  this.removeCustomer = function (customerID) {
    var customerIndex = this.findCustomerIndex(customerID){
      if (customerIndex >= 0) {
        this.customers.splice(customerIndex, 1);
      } else {
        console.log('Customer not found');
      }
    }
  }
this.availableCars = function (){
  function(car){


  };
}
this.rentCar = function (customerID, rentalDuration){
  if (this.availableCars.length === 0){
    console.log('All our cars have been rented');
  } else {
    if (this.getCustomer(customerID)){

    }
  }
}
};


// Codes you can run to test your code
var customerInfo = {
  id: "001",
  name: "Sherman"
};


var customerA = new Customer(customerInfo);

var carInfo = {
  id: "001",
  producer: "Toyota",
  model: "Subra",
  rentalPrice: 200,
};

var carA = new Car(carInfo);

var vendor = new Vendor('Jens Limited');
vendor.addCustormer(customerA);

console.log(vendor.availableCars());
vendor.addCar(carA);
console.log(vendor.availableCars());

vendor.rentCar(customerA.id, 5);
