/* global 
    Account 
*/

"use strict";

/**
 * A Savings Account class
 *
 * Provides the basic functionality that every account should have
 */
// eslint-disable-next-line no-unused-vars
class SavingsAccount extends Account {
  constructor(number, interest) {
    super(number);
    this._interest = interest;
  }

  /**
   * Setter for the 'private' interest field
   *
   * @param {value} interest value
   * @returns {undefined}
   */
  setInterest(value) {
    this._interest = value;
  }

  /**
   * Accessor for the 'private' interest field
   *
   * @returns {number} interest for this account
   */
  getInterest() {
    return this._interest;
  }

  /**
   * Method to add interest into the account
   *
   * @returns {undefined}
   */
  addInterest() {
    const amount = (this.getBalance() * this._interest) / 100;
    this.deposit(amount);
  }

  /**
   * @returns {string} representation of this account
   */
  toString() {
    return (
      "SavingsAccount " +
      this.getNumber() +
      ": balance: " +
      this.getBalance() +
      " interest: " +
      this._interest
    );
  }

  /**
   * Performs needed actions at the end of the month
   *
   * @returns {string}
   */
  endOfMonth() {
    this.addInterest();
    return "Interest added " + this.toString();
  }
}
