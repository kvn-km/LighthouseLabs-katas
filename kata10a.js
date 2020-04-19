/*
	my pseudocode:
	1 find the difference between total and cash given
	2 find how many 20's fit in the diff
	3 add the number of 20's fit to a new object
	4 remove the value of n 20's from the diff
*	5 repeat 2 - 4 for all decreasing denominations
	6 return the objects
*/

let calculateChange = function(total, cash) {
    // defining the denominations
    const theDenoms = {
        twentyDollar: 2000,
        tenDollar: 1000,
        fiveDollar: 500,
        twoDollar: 200,
        oneDollar: 100,
        quarter: 25,
        dime: 10,
        nickel: 5,
        penny: 1
    };
    // finding the difference between cost and cash given
    let theDiff = cash - total;
    // setup the output object
    let theChange = {};

    for (let x in theDenoms) {
        let theAmount = 0; // the counter
        while (theDiff / theDenoms[x] >= 1) {
            // if amount can be taken from change, add to the counter
            theAmount = theAmount + 1;
            // remove the amount from change and repeat
            theDiff -= theDenoms[x];
        }
        // only push the key:value pair if there's a value as per the expected output
        if (theAmount != 0) {
            theChange[x] = theAmount;
        }
    }
    return theChange;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

/*
	expected output:
	{ twoDollar: 1, dime: 1, penny: 3 }
	{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
	{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
*/
