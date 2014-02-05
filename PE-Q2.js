//Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

var fibA = 0;
var fibB = 1;

var fibC = 0;
var evenSum = 0;

while(fibA<4000000){

	fibC = fibA + fibB;
	
	document.write("<br>" + fibA + " ");

	fibA = fibB;
	fibB = fibC;
	
	if(fibC%2==0){
		document.write("even");
		evenSum += fibC;
	}
}

document.write("<br><br>The sum of all even valued terms = " + evenSum);
