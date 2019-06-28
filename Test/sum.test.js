import sum from './sum'

test('add 1 + 2 to equal to 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('object assignment', () => {
    const data = { one: 1 }
    data['two'] = 2
    expect(data).toEqual({ one: 1, two: 2 })
    expect(data).not.toEqual({ three: 3 })
})

test('number comparison', () => {
    const value = 2 + 2
    expect(value).toBeGreaterThan(3)
    expect(value).toBeLessThan(5)
    expect(value).toEqual(4)
    expect(value).toBe(4)
})

test('float addition', () => {
    const value = 0.1 + 0.2
    expect(value).toBeCloseTo(0.3) // 浮点运算建议使用tobeCloseTo来避免误差导致测试失败
})


test('string comparison', () => {
    expect('team').not.toMatch(/I/)
    expect('there is a hi').toMatch(/hi/)
    expect('there is a hi').toMatch(/^there/)
})

/* #region   */
// Array test
const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
]

test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer')
    expect(new Set(shoppingList)).toContain('beer')
})
/* #endregion */


/* #region   */
// Throw test
function compileAndroidCode() {
    throw 'you are using the wrong JDK'
}

test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow()

    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK')
    expect(compileAndroidCode).toThrow(/JDK/)
})

// throw certain type of error
class ConfigError {
    constructor (error) {
        this.error = error
    }  
}

function compileError () {
    throw new ConfigError('a config exception occurs')
}

test('Customized exception as expected', () => {
    expect(compileError).toThrow()
    expect(compileError).toThrow(ConfigError)
    expect(compileAndroidCode).toThrow()
})
/* #endregion */