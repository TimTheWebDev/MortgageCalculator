function myHomeCostValidationFunction() {
    var x, text;
    x = document.getElementById("homeCost").value;
    return !(isNaN(x) || x < 1 || x > 10000000);
}

function myDownPaymentValidationFunction() {
    if(!myHomeCostValidationFunction()){
        return false;
    }
    var x, text, homeCost   
    homeCost = document.getElementById("homeCost").value;
    x = document.getElementById("downPayment").value;
    return !(isNaN(x) || x < 1 || (x > homeCost && homeCost == 0)); 
}

function myAprValidationFunction() {
    var x, text;
    x = document.getElementById("apr").value;
    return !(isNaN(x) || x < .1 || x > 100);
}
