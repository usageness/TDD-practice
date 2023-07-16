import Dollar from "../src/money";

describe("TDD 연습을 위한 테스트입니다.", () => {
  beforeAll(() => {});

  it("오류 수정 예제", () => {
    const five = new Dollar(5);
    let product = five.times(2);
    expect(product.amount).toBe(10);

    product = five.times(3);
    expect(product.amount).toBe(15);
  });

  it("equals() 테스트", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });
});
