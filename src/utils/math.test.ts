import { sum, multiply, makeSquare, divide, isEven } from "./math";

describe('Тестирование математических операций', () => {
    test('Результат сложения 1 и 2 = 3', () => {
        expect(sum(1,2)).toBe(3)
    })
    
    test('Результат умножения 5 и 6 = 30', () => {
        expect(multiply(5,6)).toBe(30)
    })

    test('Результат возведения 9 в квадрат 81', () => {
        expect(makeSquare(9,2)).toBe(81)
    })

    test('Результат деления 100 на 10 = 10', () => {
        expect(divide(100,10)).toBe(10)
    })
    
    test('8 это четное число', () => {
        expect(isEven(8)).toBe(true)
    })
})

