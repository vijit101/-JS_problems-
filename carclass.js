function main(){
    class Car {
        #regnum = 10204;
    constructor(make, model, year, color, mileage) {
        
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
      this.mileage = mileage; 
    }
  }
    
    Car.prototype.getMake = function(){
        return this.make;
      };
    
    
    
    
    const myCar = new Car("Toyota", "Camry", 2020, "blue", 5000);
        console.log(myCar.getMake());
        console.log(myCar.getModel());
        console.log(myCar.getYear());
        console.log(myCar.getColor());
        console.log(myCar.getMileage());
      //Do not modify the return statement;
        return Car;
      }
      main();