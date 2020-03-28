// The following 3 functions examine the form text and check that 
// it falls within my set parameters.


// I don't want users to input home prices less than $1, higher than 
// $10,000,000 or non numerical values
function myHomeCostValidationFunction() {
    var x, text;
    x = document.getElementById("homeCost").value;
    return !(isNaN(x) || x < 1 || x > 10000000);
}

// I don't want users to enter down payment that exceeds the 
// principal amount, is a non number or is less than $1.
function myDownPaymentValidationFunction() {
    if (!myHomeCostValidationFunction()) {
        return false;
    }
    var x, text, homeCost
    homeCost = document.getElementById("homeCost").value;
    x = document.getElementById("downPayment").value;
    return !(isNaN(x) || x < 1 || (x > homeCost && homeCost == 0));
}


// I don't want interest rates less than .1%, greater than 50%
// or non numbers.
function myAprValidationFunction() {
    var x, text;
    x = document.getElementById("apr").value;
    return !(isNaN(x) || x < .1 || x > 50);
}


// I wish I could write regular expressions.  This is money formatting 
// taken from stackoverflow.  It was the best solution I could find
// and I put it here for lack of a better place.
function currencyFormat(num) {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}