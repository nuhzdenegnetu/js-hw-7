import { code } from './prepareTestEnvironment'
import { DateCalculator } from '../main'

describe('Code tests for DateCalculator', () => {
  let calculator

  beforeEach(() => {
    // Створення екземпляра калькулятора дат з фіксованою початковою датою
    calculator = new DateCalculator('2023-01-01')
  })

  test('Adds days correctly', () => {
    calculator.addDays(10)
    expect(calculator.getResult()).toBe('2023-01-11')
  })

  test('Subtracts days correctly', () => {
    calculator.subtractDays(1)
    expect(calculator.getResult()).toBe('2022-12-31')
  })

  test('Handles combination of addition and subtraction correctly', () => {
    calculator.addDays(5)
    calculator.subtractDays(3)
    expect(calculator.getResult()).toBe('2023-01-03')
  })

  test('File should use "function" for DateCalculator', () => {
    expect(code).toMatch(/function DateCalculator/)
  })

  test('Class should not be defined with "class" keyword', () => {
    expect(code).not.toMatch(/class DateCalculator/)
  })

  test('Should declare "this.addDays" method', () => {
    const functionCodeAsString = DateCalculator.toString()
    expect(functionCodeAsString).toMatch(/this\.addDays\s*=\s*function/)
  })

  test('Should declare "this.subtractDays" method', () => {
    const functionCodeAsString = DateCalculator.toString()
    expect(functionCodeAsString).toMatch(/this\.subtractDays\s*=\s*function/)
  })

  test('Should declare "this.getResult" method', () => {
    const functionCodeAsString = DateCalculator.toString()
    expect(functionCodeAsString).toMatch(/this\.getResult\s*=\s*function/)
  })
})
