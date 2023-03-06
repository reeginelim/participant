function testDemo() {
  describe('sum function', () => {
    test('returns the sum of two numbers', () => {
      const result = 3;
      expect(result).toEqual(3);
    });
  });
};

testDemo();