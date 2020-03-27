// Initializing variables
function calculate(e) {
    e.preventDefault();

    let homeCost = Number.parseFloat(document.getElementById("homeCost").value);
    if (!myHomeCostValidationFunction()) {
        console.log("invalid");
        return
    } 
    let downPayment = Number.parseFloat(document.getElementById("downPayment").value);
    if (!myDownPaymentValidationFunction()) {
        console.log("invalid");
        return
    }
    let apr = Number.parseFloat(document.getElementById("apr").value);
    if (!myAprValidationFunction()) {
        console.log("invalid");
        return
    }
    let years = Number.parseInt(document.getElementById("years").value);
    let monthlyInterest = apr/100/12;
    let monthlyPayments = years*12;

    let principal = homeCost - downPayment;
    let remainingPrincipal = principal;
    let amortSched = document.getElementById("amortSched").checked;
    let amortSchedule = false;

   





    //  the way the example uses this calling it you simply use it like
    //  formatter.format(mortgagePayment); doesn't there need to be something
    //else there to use it?



  
   


    // Calculate monthly payment and converts to currency
    mortgagePayment = principal * (monthlyInterest * Math.pow(1 + monthlyInterest, monthlyPayments)
        / (Math.pow(1 + monthlyInterest, monthlyPayments) - 1));
    mortgagePayment = Math.floor(mortgagePayment * 100) / 100;
    document.getElementById("mortgagePayment").innerHTML = "$" + mortgagePayment;

    // Calculates total cost of the loan and converts to currency
    totalPayments = mortgagePayment * monthlyPayments;
    totalPayments = Math.floor(totalPayments * 100) / 100;
    document.getElementById("totalPayments").innerHTML = "$" + totalPayments;

    // Calculates total interest paid
    totalInterest = totalPayments - principal;
    totalInterest = Math.floor(totalInterest * 100) / 100;
    document.getElementById("totalInterest").innerHTML = "$" + totalInterest;
    // Displays monthly payment, total payments and total interest



    //  if the amortization schedule box is checked it runs off a table
console.log(amortSched);
document.getElementById("output").innerHTML = "";
    if (amortSched == true) {
console.log(monthlyPayments);
        for (i = 1; i < (monthlyPayments + 1); i++) {

            // Calculates monthly interest cost
            monthlyAmortInt = remainingPrincipal * monthlyInterest;
console.log(monthlyInterest, remainingPrincipal, monthlyAmortInt);

            // Reduces var remainingPrincipal to the principal left over after the interest
            // is paid
            remainingPrincipal = remainingPrincipal - (mortgagePayment - monthlyAmortInt);
console.log(remainingPrincipal, mortgagePayment, monthlyAmortInt);
            // Calculates monthly principal paid
            monthlyPrincipal = mortgagePayment - monthlyAmortInt;
console.log(monthlyPrincipal, mortgagePayment - monthlyAmortInt);
            // Prints month, principal remaining, monthly interest and monthly principal
console.log(i, remainingPrincipal, monthlyAmortInt, monthlyPrincipal);
            document.getElementById("output").innerHTML += `<tr>
            <td>${i}</td>
            <td>${remainingPrincipal.toFixed(2)}</td>
            <td>${monthlyAmortInt.toFixed(2)}</td>
            <td>${monthlyPrincipal.toFixed(2)}</td>
          </tr>`
        }
    }
}


document.querySelector("form").addEventListener("submit", calculate);