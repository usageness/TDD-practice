class Money {
  amount;
  currency;

  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  static dollar(amount) {
    return new Money(amount, "USD");
  }

  static franc(amount) {
    return new Money(amount, "CHF");
  }

  get currency() {
    return this.currency;
  }

  equals(object) {
    return this.currency === object.currency && this.amount === object.amount;
  }

  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }
}

export { Money };
