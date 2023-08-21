class Money {
  amount;
  currency;

  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  static dollar(amount) {
    return new Dollar(amount, "USD");
  }

  static franc(amount) {
    return new Franc(amount, "CHF");
  }

  get currency() {
    return this.currency;
  }

  equals(object) {
    return object instanceof this.constructor && this.amount === object.amount;
  }
}

class Dollar extends Money {
  times(multiplier) {
    return Money.dollar(this.amount * multiplier);
  }
}

class Franc extends Money {
  times(multiplier) {
    return Money.franc(this.amount * multiplier);
  }
}

export { Money, Dollar, Franc };
