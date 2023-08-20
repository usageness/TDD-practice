class Money {
  amount;

  constructor(amount) {
    this.amount = amount;
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

export { Dollar, Franc };
