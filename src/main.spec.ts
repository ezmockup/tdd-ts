import { GCD, GCDRefactor } from './main';

test(`given one number is zero and one number is positive number: 0 and 1,
it should return 1`, () => {
  // Arrange
  const a = 0;
  const b = 1;

  // Act
  const result = GCD(a, b);
  const resultRefactor = GCDRefactor(a, b);

  // Assert
  expect(result).toBe(1);
  expect(resultRefactor).toBe(1);
});

test('given 2 positive numbers: 12 and 8, it should return 4', () => {
  // Arrange
  const a = 12;
  const b = 8;

  // Act
  const result = GCD(a, b);
  const resultRefactor = GCDRefactor(a, b);

  // Assert
  expect(result).toBe(4);
  expect(resultRefactor).toBe(4);
});

test('given 2 positive numbers: 8 and 12, it should return 4', () => {
  // Arrange
  const a = 8;
  const b = 12;

  // Act
  const result = GCD(a, b);
  const resultRefactor = GCDRefactor(a, b);

  // Assert
  expect(result).toBe(4);
  expect(resultRefactor).toBe(4);
});

test(`given one prime number and one is not prime number: 7 and 15,
it should return 1`, () => {
  // Arrange
  const a = 7;
  const b = 15;

  // Act
  const result = GCD(a, b);
  const resultRefactor = GCDRefactor(a, b);

  // Assert
  expect(result).toBe(1);
  expect(resultRefactor).toBe(1);
});

test(`give one negative number and one is positive number:
-4 and 2, it should return 2`, () => {
  // Arrange
  const a = -4;
  const b = 2;

  // Act
  // const result = GCD(a, b);
  const resultRefactor = GCDRefactor(a, b);

  // Assert
  // expect(result).toBe(2);
  expect(resultRefactor).toBe(2);
});

test(`give two negative numbers:
-12 and -8, it should return 2`, () => {
  // Arrange
  const a = -12;
  const b = -8;

  // Act
  // const result = GCD(a, b);
  const resultRefactor = GCDRefactor(a, b);

  // Assert
  // expect(result).toBe(2);
  expect(resultRefactor).toBe(4);
});
