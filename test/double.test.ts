import double from '../src/double'
describe('double', () => {
  it('should error if get number in the valid range.', () => {
    expect(() => {
      double(Number.MAX_VALUE)
    }).toThrow('The number is out of range that can be represented.')
  })

  it('should input a number and get it doubled', () => {
    expect(double(2)).toBe(4)
  })
})
