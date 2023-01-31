/* global 
    Account, SavingsAccount, CheckingAccount
*/

"use strict";

/**
 * A Bank class
 *
 * Provides the basic functionality that every bank should have
 */
// eslint-disable-next-line no-unused-vars
class Bank {
  static nextNumber = 0;

  constructor() {
    this._accounts = [];
  }

  /**
   * Returns the specific type of Bank Account
   *
   * @param {number} account number
   * @returns {account} object
   */
  getAccount(number) {
    if (this._accounts.findIndex((a) => a.getNumber() === number) === -1)
      throw new Error("Account number does not exist.");

    return this._accounts.find((a) => a.getNumber() === number);
  }

  /**
   * Method to add an account into the bank
   *
   * @returns {number} account number
   */
  addAccount() {
    this._accounts.push(new Account(Bank.nextNumber));
    return Bank.nextNumber++;
  }

  /**
   * Method to add a savings account into the bank
   *
   * @param {interest} interest value of the account
   * @returns {number} account number
   */
  addSavingsAccount(interest) {
    this._accounts.push(new SavingsAccount(Bank.nextNumber, interest));
    return Bank.nextNumber++;
  }

  /**
   * Method to add a checking account into the bank
   *
   * @param {overdraft} overdraft limit value of the account
   * @returns {number} account number
   */
  addCheckingAccount(overdraft) {
    this._accounts.push(new CheckingAccount(Bank.nextNumber, overdraft));
    return Bank.nextNumber++;
  }

  /**
   * Method to remove an account from the bank
   *
   * @param {number} account number to be removed
   * @returns {undefined}
   * @throws {Error} when entered account number does not exist
   */
  closeAccount(number) {
    if (this._accounts.findIndex((a) => a.getNumber() === number) === -1)
      throw new Error("Account number does not exist.");

    this._accounts = this._accounts.filter((a) => a.getNumber() !== number);
  }

  /**
   * @returns {string} reports list of all the bank accounts
   */
  accountReport() {
    const mapToStrings = this._accounts.map((a) => a.toString());
    return mapToStrings.reduce((a, b) => a + "\n" + b);
  }

  /**
   * Performs needed actions at the end of the month
   *
   * @returns {string}
   */
  endOfMonth() {
    const mapToEndOfMonth = this._accounts.map((a) => a.endOfMonth());
    return mapToEndOfMonth.reduce((a, b) => a + "\n" + b);
  }
}
