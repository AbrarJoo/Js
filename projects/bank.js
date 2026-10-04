class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }

    this.balance += amount;

    this.transactions.push({
      type: "deposit",
      amount: amount,
    });

    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }

    this.balance -= amount;

    this.transactions.push({
      type: "withdraw",
      amount: amount,
    });

    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    let deposits = [];

    this.transactions.forEach((transaction) => {
      if (transaction.type === "deposit") {
        deposits.push(transaction.amount);
      }
    });

    return `Deposits: ${deposits.join(",")}`;
  }

  listAllWithdrawals() {
    let withdrawals = [];

    this.transactions.forEach((transaction) => {
      if (transaction.type === "withdraw") {
        withdrawals.push(transaction.amount);
      }
    });

    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

const myAccount = new BankAccount();

myAccount.deposit(200);
myAccount.deposit(150);

myAccount.withdraw(50);
myAccount.withdraw(25);
myAccount.withdraw(30);
