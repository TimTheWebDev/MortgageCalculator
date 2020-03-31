// The following 3 functions examine the form text and check that 
// it falls within my set parameters.


// I don't want users to input home prices less than $1, higher than 
// $10,000,000 or non numerical values
function myHomeCostValidationFunction() {
    var x, text;
    x = document.getElementById("homeCost").value;
    return !(isNaN(x) || x < 1000 || x =="" || x > 10000000);
}


// I don't want users to enter down payment that exceeds the 
// principal amount, is a non number or is less than $1.  This
// one had to be turned into a number for comparison purposes.
function myDownPaymentValidationFunction() {
    if (!myHomeCostValidationFunction()) {
        return false;
    }
    var x, text, homeCost
    homeCost = document.getElementById("homeCost").value;
    homeCost = Number(homeCost);
    x = document.getElementById("downPayment").value;
    x = Number (x);
    if (x < 0) return false;
    if (isNaN(x))  return false;
    if (x > homeCost) return false;
    return true;
}


// I don't want interest rates less than .1%, greater than 50%
// or non numbers.
function myAprValidationFunction() {
    var x, text;
    x = document.getElementById("apr").value;
    return !(isNaN(x) || x < .1 || x =="" ||  x > 50);
}


// I wish I could write regular expressions.  This is money formatting 
// taken from stackoverflow.  It was the best solution I could find
// and I put it here for lack of a better place.
function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}