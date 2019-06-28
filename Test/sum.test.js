import sum from './sum'

test('add 1 + 2 to equal to 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('object assignment', () => {
    const data = { one: 1}
    data['two'] = 2
    expect(data).toEqual({one: 1, two: 2})
    expect(data).not.toEqual({three: 3})
})