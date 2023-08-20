class Money {
  amount;

  constructor(amount) {
    this.amount = amount;
  }

  static dollar(amount) {
    return new Dollar(amount);
  }

  static franc(amount) {
    return new Franc(amount);
  }

  equals(object) {
    return object instanceof this.constructor && this.amount === object.amount;
  }
}

class Dollar extends Money {
  amount;

  constructor(amount) {
    super(amount);
    this.amount = amount;
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }
}

class Franc extends Money {
  amount;

  constructor(amount) {
    super(amount);
    this.amount = amount;
  }

  times(multiplier) {
    return new Franc(this.amount * multiplier);
  }
}

export { Money, Dollar, Franc };
