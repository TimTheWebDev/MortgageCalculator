package mortgageCalculator;

import java.text.NumberFormat;
import java.util.Scanner;

public class calculator {

	public static void main(String[] args) {
		
		// Initialize new scanner keyboard input
		Scanner scanner = new Scanner(System.in);

		//Because they were in the try block the variables are initiated here
		double homeCost = 0.0;
		double downPayment = 0.0;
		double apr = 0.0;
		double monthlyInterest = 0.0;
		int years = 0;
		int monthlyPayments = 0;	
		boolean askForInput = true;

		// While loop to restart the process in the event of an invalid input
		while (askForInput)
			try {
				// Input cost
				System.out.print("Home Cost:  $");
				homeCost = scanner.nextDouble();

				// Input down payment
				System.out.print("Down Payment:  $");
				downPayment = scanner.nextDouble();

				// Input annual percentage rate
				System.out.print("APR:  %");
				apr = scanner.nextDouble();
				// /100 to get to decimal and /12 to get to monthly val
				monthlyInterest = apr / 100 / 12;

				// Input duration and convert to months for calculation
				System.out.print("Duration (whole years):");
				years = scanner.nextInt();
				monthlyPayments = years * 12;
				askForInput = false;
			}

			// Not clearing the scanner blew up the process so the clear buffer is the work around
			catch (Exception e) {
				String clearBuffer = scanner.next();
				System.out.println("Invalid Input - Please Try Again");
			}

		// Calculate loan value
		double principal = homeCost - downPayment;

		// Calculate monthly payment and converts to currency
		double mortgagePayment = principal * (monthlyInterest * Math.pow(1 + monthlyInterest, monthlyPayments)
				/ (Math.pow(1 + monthlyInterest, monthlyPayments) - 1));
		String mortgageFormat = NumberFormat.getCurrencyInstance().format(mortgagePayment);

		// Calculates total cost of the loan and converts to money
		double totalPayments = mortgagePayment * monthlyPayments;
		String paymentFormat = NumberFormat.getCurrencyInstance().format(totalPayments);

		// Displays monthly payment and loan cost
		System.out.println("Monthly Payment:  " + mortgageFormat);
		System.out.println("Total Loan Cost:  " + paymentFormat);

		// Initialize amortTable with no value
		String amortTable = "";
		
		// While loop exists to start over in the event of an invalid input
		while (!amortTable.toUpperCase().equals("Y")) {
			// User inputs Y or N to see the amortization table
			System.out.print("Would you like to see the amortization schedule (Y or N)?");
			amortTable = scanner.next();

			// Initializes the variable remaining principal to the value of the loan
			double remainingPrincipal;
			remainingPrincipal = principal;

			// Loop to display the amortization data by month
			if (amortTable.toUpperCase().equals("Y")) {
				System.out.println("\nMonth    Remaining Principal:  "
						+ "    Monthly Interest:  "
						+ "     monthly Principal:  " );
				for (int i = 1; i < (monthlyPayments + 1); i++) {
				
					// Calculates monthly interest cost
					double monthlyAmortInt = remainingPrincipal * monthlyInterest;
					
					// Reduces var remainingPrincipal to the principal left over after the interest
					// is paid
					remainingPrincipal = remainingPrincipal - (mortgagePayment - monthlyAmortInt);
					
					// Calculates monthly principal paid
					double monthlyPrincipal = mortgagePayment - monthlyAmortInt;
					
					// Prints month, principal remaining, monthly interest and monthly principal
					System.out.printf( "%5d         $%10.2f            $%8.2f             $%8.2f\n ", i, 
							remainingPrincipal, monthlyAmortInt, monthlyPrincipal);
				}
			} else if (amortTable.toUpperCase().equals("N"))
			{
				// Exits if user doesn't want to see table
				System.out.println("Thank you");
				System.exit(0);
			}
			else {
				System.out.println("Invalid Input");
			}
		}
		scanner.close();
	}
}
