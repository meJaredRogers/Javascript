//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143?

var theNum = 600851475143;
var factorsArr = [];

function smallestFactor(num){
	if(num%2 == 0){
		return 2
	}
	var end = Math.floor(Math.sqrt(num));
	for (var i = 3; i <= end; i += 2) {
		if(num % i == 0){
			return i;
		}
	}
	return num;
}

while(theNum != 1){
	var factor = smallestFactor(theNum);
	factorsArr.push(factor);
	theNum = theNum / factor;
}

var largestPrime = Math.max.apply(Math, factorsArr)

document.write("<br><br>The largest prime factor = " + largestPrime);
