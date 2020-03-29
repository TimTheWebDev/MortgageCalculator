// The following code listens for form input, calls the relevant validation 
// function and then outputs whether it's valid on the form

document.getElementById("homeCost").addEventListener("input", function () {
    var x, text;
    if (!myHomeCostValidationFunction()) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("homeCostValid").innerHTML = text;
})


document.getElementById("downPayment").addEventListener("input", function () {
    var x, text;
    if (!myDownPaymentValidationFunction()) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("downPaymentValid").innerHTML = text;
})


document.getElementById("apr").addEventListener("input", function () {
    if (!myAprValidationFunction()) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("aprValid").innerHTML = text;
})