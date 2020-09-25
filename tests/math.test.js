const { add, calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math')



test('Should calculate a tip', () => {
    const total = calculateTip(10, .3)

    expect(total).toBe(13)
})

test('Should calculate tip with default value', ()=>{
    const total = calculateTip(10)

    expect(total).toBe(12.5)
})

test('Convert Fahrenheit to Celsius', ()=>{
    const convertedValue = fahrenheitToCelsius(32)

    expect(convertedValue).toBe(0)
})


test('Convert Celsius to Fahrenheit', () =>{
    const convertedValue = celsiusToFahrenheit(0)

    expect(convertedValue).toBe(32)
})

test('Adding two numbers', async () =>{
   const sum = await add(2,3)

   expect(sum).toBe(5)
})