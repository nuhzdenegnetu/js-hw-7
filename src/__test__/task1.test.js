import { sumArray } from '../main'

describe('sumArray', () => {
  test('sum of elements in an array of numbers', () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15)
  })

  test('sum of elements in an empty array', () => {
    expect(sumArray([])).toBe(0)
  })

  test('sum of elements in an array with one number', () => {
    expect(sumArray([5])).toBe(5)
  })

  test('sum of elements in an array with negative numbers', () => {
    expect(sumArray([-1, -2, -3, -4, -5])).toBe(-15)
  })
})
