import { doubleArrayElements } from '../main'

describe('doubleArrayElements', () => {
  test('doubling elements of an array of numbers', () => {
    expect(doubleArrayElements([1, 2, 3, 4, 5])).toEqual([2, 4, 6, 8, 10])
  })

  test('doubling elements of an empty array', () => {
    expect(doubleArrayElements([])).toEqual([])
  })

  test('doubling elements of an array with negative numbers', () => {
    expect(doubleArrayElements([-1, -2, -3])).toEqual([-2, -4, -6])
  })
})
