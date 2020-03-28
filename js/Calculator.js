//Calculate is the function that checks the validators.js file to validate the data
//and then handles the math.
function calculate(e) {
    e.preventDefault();

// ***** VARIABLES *****

    // The following 3 statements instantiate validated form inputs to their variables.
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
    // years is taken in from the drop down menu
    let years = Number.parseInt(document.getElementById("years").value);
    // monthlyInterest is instantiated as a decimal
    let monthlyInterest = apr / 100 / 12;
    // Calculates total loan payments
    let monthlyPayments = years * 12;
    let principal = homeCost - downPayment;
    // remainingPrincipal has to be set to principal to start the loop and 
    // it is decremented by the principal paid in the previous run of the loop.
    let remainingPrincipal = principal;
    // Determines whether the box that will run the loop for the amortization 
    // schedule is checked.  
    let amortSched = document.getElementById("amortSched").checked;




// ***** MATH *****

    // Calculate monthly payment using principal, monthly apr and loan duration in months.
    mortgagePayment = principal * (monthlyInterest * Math.pow(1 + monthlyInterest, monthlyPayments)
        / (Math.pow(1 + monthlyInterest, monthlyPayments) - 1));
    document.getElementById("principal").innerHTML = currencyFormat(principal);
    document.getElementById("mortgagePayment").innerHTML = currencyFormat(mortgagePayment);

    // Calculates total cost of the loan.
    totalPayments = mortgagePayment * monthlyPayments;
    document.getElementById("totalPayments").innerHTML = currencyFormat(totalPayments);

    // Calculates total interest paid.
    totalInterest = totalPayments - principal;
    document.getElementById("totalInterest").innerHTML = currencyFormat(totalInterest);
 
    // Instantiates the output object outside the loop
    document.getElementById("output").innerHTML = "";




// ***** LOOP *****

    // If the check box is selected, the loop runs.  Each iteration produces for numbers:
    // payment number, remaining principal, the portion of the payment that is interest
    // and the portion of the payment that is principal.  The principal should increase
    // top to bottom and the interest should decrease top to bottom.
    if (amortSched == true) {
        
        // Getting payments from 1 to number of payments requires adding another month 
        // because the numbers are indexed from zero.
        for (i = 1; i < (monthlyPayments + 1); i++) {

            // Calculates monthly interest cost
            monthlyAmortInt = remainingPrincipal * monthlyInterest;

            // Reduces var remainingPrincipal to the principal left over after the interest
            // is paid.
            remainingPrincipal = remainingPrincipal - (mortgagePayment - monthlyAmortInt);

            // Calculates monthly principal paid.
            monthlyPrincipal = mortgagePayment - monthlyAmortInt;

            // Prints month, principal remaining, monthly interest and monthly principal
            // on one line as my output object
            document.getElementById("output").innerHTML += `<tr>
            <td>Payment  ${i}    </td>
            <td>Remaining Principal  ${currencyFormat(remainingPrincipal)}</td>
            <td>Monthly Interest  ${currencyFormat(monthlyAmortInt)}</td>
            <td>Monthly Principal  ${currencyFormat(monthlyPrincipal)}</td>
          </tr>`
        }
    }
}


document.querySelector("form").addEventListener("submit", calculate);