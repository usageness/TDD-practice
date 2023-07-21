import Dollar from "../src/money";

describe("TDD 연습을 위한 테스트입니다.", () => {
  beforeAll(() => {});

  it("오류 수정 예제", () => {
    const five = new Dollar(5);
    expect(new Dollar(10)).toStrictEqual(five.times(2));
    expect(new Dollar(15)).toStrictEqual(five.times(3));
  });

  it("equals() 테스트", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });
});
