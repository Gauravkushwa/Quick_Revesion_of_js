function createBankAccount(initialBalance) {
    let balance = initialBalance;
  
    return {
      deposit(amount) {
        if (amount <= 0 || typeof amount !== "number") {
          return "Invalid deposit amount.";
        }
        balance += amount;
        return balance;
      },
  
      withdraw(amount) {
        if (amount <= 0 || typeof amount !== "number") {
          return "Invalid withdrawal amount.";
        }
        if (amount > balance) {
          return "Insufficient funds.";
        }
        balance -= amount;
        return balance;
      },
  
      getBalance() {
        return balance;
      }
    };
  }
  

  const account = createBankAccount(100);

console.log(account.deposit(50));   
console.log(account.withdraw(30)); 
console.log(account.getBalance()); 

console.log(account.balance);  