// Import the function sum from the app.js file
const { fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');


test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("one dollar should be 156.5 yen", function(){
    const yen = fromDollarToYen(3.5);
    const expected = 3.5 * 156.5;

    expect(yen).toBe(expected);
})

test("one yen should be 0.87 pounds", function() {
    const pound = fromYenToPound(3.5)
    const expected = 3.5 * 0.87;

    expect(pound).toBe(expected)
})