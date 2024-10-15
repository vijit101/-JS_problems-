//complete the ExpenseTracker class.
// Do not alter the starter code
function main() {
    
    class ExpenseTracker {
        expenses = [];
        #income;

        constructor(income){
            
            this.#income = income;
        }

        #calculateTotalExpenses(){
            let sum = 0; 
            for(let i=0; i<this.expenses.length ; i++){            
                sum += this.expenses[i].amount;  
            }
            return sum;
        };

        addExpense(name, amount, date){
            let obj = {name : name, amount : amount ,date :date};
            this.expenses.push(obj);
        };

        calculateBalance(){
            return (this.#income - this.#calculateTotalExpenses());
        };
      //Create your private properites here
      //Create a constructor function
      //create your private properties to calculate expenses
      //Create your public properties here
    }
    //The class should function accordingly.
    const tracker = new ExpenseTracker(5000);
    tracker.addExpense("Rent", 1000, "2021-10-01");
    tracker.addExpense("Groceries", 500, "2021-10-02");
    console.log(tracker.calculateBalance()); // should output 3500
    return ExpenseTracker;
  }
  
  main();