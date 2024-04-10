const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    expect(dollars).toBe(expected); 
});

test("one dollar should be 156.5 yen", function(){
    const yen = fromDollarToYen(3.5);
    const expected = (3.5 / 1.07) * 156.5; 
    expect(yen).toBe(expected);
});

test("one yen should be 0.87 pounds", function() {
    const pound = fromYenToPound(3.5)
    const expected = (3.5 / 156.5) * 0.87; 
    expect(pound).toBe(expected)
});
