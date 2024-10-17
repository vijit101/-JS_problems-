class Account {
  accountNumber; //(string)
  #balance = 0; //(number)

  constructor(accountNumber){
this.accountNumber = accountNumber;
  }

  get getbalance() {
    return this.#balance;
  }

  set getbalance(newBal) {
    if (newBal > 0) {
      this.#balance = newBal;
    } else {
      console.log("Please enter a positive value for the balance");
    }
  }

  deposit(depAmt) {
    this.getbalance = this.getbalance + depAmt;
  }

  withdraw(wAmt) {
    if (wAmt > this.getbalance) {
      console.log("Insufficient balance");
    }
    else{
        this.getbalance -= wAmt;
    }
  }

}

const myAccount = new Account("1234567890");
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.getbalance = -10;

console.log(myAccount.getbalance);

