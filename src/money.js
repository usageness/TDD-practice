class Dollar {
  amount;

  constructor(amount) {
    this.amount = amount;
  }

  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }

  equals(object) {
    return this.amount === object.amount;
  }
}

export default Dollar;
