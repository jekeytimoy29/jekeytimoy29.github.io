/* global 
    Account, SavingsAccount, CheckingAccount, Bank
*/

"use strict";

describe("Account class tests", function () {
  it("Tests the Account Initialization and getNumber() function", function () {
    const account = new Account(5678);
    assert.equal(account.getNumber(), 5678);
  });
  it("Tests the Account deposit(), getBalance() functions", function () {
    const account = new Account(3678);
    account.deposit(5125.35);
    assert.equal(account.getBalance(), 5125.35);
    assert.throws(
      () => account.deposit(0),
      RangeError,
      /Deposit amount has to be greater than zero/
    );
    assert.throws(
      () => account.deposit(-1),
      /Deposit amount has to be greater than zero/
    );
  });
  it("Tests the Account withdraw(), getBalance() functions", function () {
    const account = new Account(1234);
    assert.throws(() => account.withdraw(500.0), Error, /Insufficient funds/);
    assert.throws(
      () => account.withdraw(0),
      RangeError,
      /Withdraw amount has to be greater than zero/
    );
    assert.throws(
      () => account.withdraw(-1),
      RangeError,
      /Withdraw amount has to be greater than zero/
    );

    account.deposit(5125.35);
    account.withdraw(125.35);
    assert.equal(account.getBalance(), 5000.0);
  });
  it("Tests the Account toString() function", function () {
    const account = new Account(1234);
    account.deposit(5125.35);
    assert.equal(account.toString(), "Account 1234: balance: 5125.35");
  });
  it("Tests the Account endOfMonth() function", function () {
    const account = new Account(1234);
    account.deposit(5125.35);
    assert.equal(account.endOfMonth(), "");
  });
});

describe("SavingsAccount class tests", function () {
  it("Tests the SavingsAccount set/get Interest functions", function () {
    const savingsaccount = new SavingsAccount(1234);
    savingsaccount.setInterest(1.2);
    assert.equal(savingsaccount.getInterest(), 1.2);
  });
  it("Tests the SavingsAccount addInterest and toString() functions", function () {
    const savingsaccount = new SavingsAccount(1234, 2.5);
    savingsaccount.deposit(5125.35);
    assert.equal(
      savingsaccount.toString(),
      "SavingsAccount 1234: balance: 5125.35 interest: 2.5"
    );

    savingsaccount.addInterest();
    assert.equal(
      savingsaccount.toString(),
      "SavingsAccount 1234: balance: 5253.48375 interest: 2.5"
    );
  });
  it("Tests the SavingsAccount endOfMonth() function", function () {
    const savingsaccount = new SavingsAccount(1234, 2.5);
    savingsaccount.deposit(5125.35);
    assert.equal(
      savingsaccount.endOfMonth(),
      "Interest added SavingsAccount 1234: balance: 5253.48375 interest: 2.5"
    );
  });
});

describe("CheckingAccount class tests", function () {
  it("Tests the CheckingAccount set/get Overdraft Limit functions", function () {
    const checkingaccount = new CheckingAccount(1234);
    checkingaccount.setOverdraft(500.0);
    assert.equal(checkingaccount.getOverdraft(), 500.0);
  });
  it("Tests the CheckingAccount withdraw() function", function () {
    const checkingaccount = new CheckingAccount(1234, 500.0);
    checkingaccount.deposit(5000.0);
    assert.throws(
      () => checkingaccount.withdraw(0),
      RangeError,
      /Withdraw amount has to be greater than zero/
    );
    assert.throws(
      () => checkingaccount.withdraw(-1),
      RangeError,
      /Withdraw amount has to be greater than zero/
    );
    assert.throws(
      () => checkingaccount.withdraw(5500.1),
      Error,
      /Overdraft Limit Exceeded/
    );

    checkingaccount.withdraw(5125.0);
    assert.equal(checkingaccount.getBalance(), -125);
  });
  it("Tests the CheckingAccount toString() function", function () {
    const checkingaccount = new CheckingAccount(1234, 500.0);
    checkingaccount.deposit(5000.0);
    assert.equal(
      checkingaccount.toString(),
      "CheckingAccount 1234: balance: 5000 overdraft limit: 500"
    );
  });
  it("Tests the CheckingAccount endOfMonth() function", function () {
    const checkingaccount = new CheckingAccount(1234, 500.0);
    checkingaccount.deposit(5000.0);
    checkingaccount.withdraw(5125.0);
    assert.equal(
      checkingaccount.endOfMonth(),
      "Warning, low balance CheckingAccount 1234: balance: -125 overdraft limit: 500"
    );
  });
});

describe("Bank class tests", function () {
  it("Tests the Bank add accounts functions", function () {
    const bank = new Bank();
    Bank.nextNumber = 0;
    assert.equal(bank.addAccount(), 0);
    assert.equal(bank.addSavingsAccount(2.5), 1);
    assert.equal(bank.addCheckingAccount(500.0), 2);

    assert.equal(bank.addAccount(), 3);
    assert.equal(bank.addSavingsAccount(1.5), 4);
    assert.equal(bank.addCheckingAccount(250.0), 5);
  });
  it("Tests the Bank remove/close account and accountReport() functions", function () {
    const bank = new Bank();
    Bank.nextNumber = 0;
    bank.addAccount();
    bank.addSavingsAccount(3.5);
    bank.addCheckingAccount(300.0);

    assert.throws(
      () => bank.closeAccount(3),
      Error,
      /Account number does not exist./
    );

    // Remove Bank Account object
    bank.closeAccount(0);

    assert.equal(
      bank.accountReport(),
      "SavingsAccount 1: balance: 0 interest: 3.5\nCheckingAccount 2: balance: 0 overdraft limit: 300"
    );
  });
  it("Tests the Bank getAccount() and endOfMonth() functions", function () {
    const bank = new Bank();
    Bank.nextNumber = 0;
    bank.addAccount();
    bank.addSavingsAccount(3.5);
    bank.addCheckingAccount(300.0);

    assert.throws(
      () => bank.getAccount(3),
      Error,
      /Account number does not exist./
    );

    // Remove Bank Account object
    bank.closeAccount(0);

    //Sets the Bank SavingsAccount
    const savingsaccount = bank.getAccount(1);
    savingsaccount.deposit(5000.0);

    //Sets the Bank CheckingAccount
    const checkingaccount = bank.getAccount(2);
    checkingaccount.deposit(5000.0);
    checkingaccount.withdraw(5200.0);

    assert.equal(
      bank.endOfMonth(),
      "Interest added SavingsAccount 1: balance: 5175 interest: 3.5\nWarning, low balance CheckingAccount 2: balance: -200 overdraft limit: 300"
    );
  });
});
