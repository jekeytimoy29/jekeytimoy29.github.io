/* global
    Account
*/

"use strict";

/**
 * A Checking Account class
 *
 * Provides the basic functionality that every account should have
 */
// eslint-disable-next-line no-unused-vars
class CheckingAccount extends Account {
  constructor(number, overdraft) {
    super(number);
    this._overdraft = overdraft;
  }

  /**
   * Setter for the 'private' overdraft field
   *
   * @param {value} overdraft limit value
   * @returns {undefined}
   */
  setOverdraft(value) {
    this._overdraft = value;
  }

  /**
   * Accessor for the 'private' overdraft field
   *
   * @returns {number} overdraft limit for this account
   */
  getOverdraft() {
    return this._overdraft;
  }

  /**
   * Method to take money out of the account
   *
   * @param {number} amount money to be taken out of the account
   * @returns {undefined}
   * @throws {RangeError} when amount is less than or equal to zero
   * @throws {Error} when the amount exceeded the given overdraft limit
   */
  withdraw(amount) {
    if (amount <= 0)
      throw new RangeError("Withdraw amount has to be greater than zero");

    if (amount > this.getBalance() + this._overdraft)
      throw new Error("Overdraft Limit Exceeded");

    this._balance -= amount;
  }

  /**
   * @returns {string} representation of this account
   */
  toString() {
    return (
      "CheckingAccount " +
      this.getNumber() +
      ": balance: " +
      this.getBalance() +
      " overdraft limit " +
      this._overdraft
    );
  }

  /**
   * Performs needed actions at the end of the month
   *
   * @returns {string}
   */
  endOfMonth() {
    let output = "";
    if (this.getBalance < 0) output = "Warning, low balance ";

    return output + this.toString();
  }
}
