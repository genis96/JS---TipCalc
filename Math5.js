/* Write a function called "calculateBillTotal".

Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip.

Notes:

Assume that sales tax is 9.5% and tip is 15%.
Do NOT tip on the sales tax, only on the pre tip amount.
var output = calculateBillTotal(20);
console.log(output); // --> 24.9
*/
/* Pseudo
1. salesTax = 9.5%
2. tip = 15%
3. totalBill = 
Whats going on:
20 x 9.5% = 1.9
20 x 15% = 3
add 20 + 1.9 + 3
*/

// Second Code Attempt -> Shorter and easier
function calculateBillTotal(preTaxAndTipAmount) {
    let salesTax = preTaxAndTipAmount * .095;
    let tip = preTaxAndTipAmount * .15;

    let totalBill = preTaxAndTipAmount + salesTax + tip;
    return totalBill;
}

var output = calculateBillTotal(20);
console.log(output); // --> 24.9


//Another Way
function calculateBillTotal(preTaxAndTipAmount) {
    let salesTax = preTaxAndTipAmount * .095;
    let tip = preTaxAndTipAmount * .15;
    return preTaxAndTipAmount + salesTax + tip;
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9


// My first code -> equals 24.5
function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let salesTax = 9.5;
    let tip = 15;
    let totalBill = 0;

    for(var i = 0; i < preTaxAndTipAmount; i++) {
        if(totalBill = preTaxAndTipAmount) {
            preTaxAndTipAmount[i] * salesTax;
            preTaxAndTipAmount[i] * tip;
            totalBill = salesTax + tip;
        }
    }
    return totalBill;
  }

var output = calculateBillTotal(20);
console.log(output); // --> 24.9


































































