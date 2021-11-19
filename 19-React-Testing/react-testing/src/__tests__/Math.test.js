import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const a = 2
  const b = 3
  const expectedSum = 5

  // Act
  const actualSum = Add(a, b)

  // Assert
  expect(actualSum).toBe(expectedSum)

})

test('Return substraction of a - b', () => {
  // Arrange
  const a = 5
  const b = 3
  const expectedSubs = 2

  // Act
  const actualSubs = Substract(a, b)

  // Assert
  expect(actualSubs).toBe(expectedSubs)

})

test('Return multiplication of two arguments', () => {
  // Arrange
  const a = 5
  const b = 3
  const expectedMulply = 15

  // Act
  const actualMulply = Multiplication(a, b)

  // Assert
  expect(actualMulply).toBe(expectedMulply)

})