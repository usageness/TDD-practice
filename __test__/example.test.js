import { Money } from "../src/money";

describe("TDD 연습을 위한 테스트입니다.", () => {
  beforeAll(() => {});

  it("Dollar 테스트", () => {
    const five = Money.dollar(5);
    expect(Money.dollar(10)).toStrictEqual(five.times(2));
    expect(Money.dollar(15)).toStrictEqual(five.times(3));
  });

  it("Franc 테스트", () => {
    const five = Money.franc(5);
    expect(Money.franc(10)).toStrictEqual(five.times(2));
    expect(Money.franc(15)).toStrictEqual(five.times(3));
  });

  it("equals() 테스트", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toBe(false);
  });

  it("Currency 테스트", () => {
    expect(Money.dollar(1).currency).toBe("USD");
    expect(Money.franc(1).currency).toBe("CHF");
  });
});
