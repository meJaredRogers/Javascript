//A palindromic number reads the same both ways. 
//The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.

var num1 = 100;
var num2 = 100;
var palindromeArr = [];

function isNumPalindrome(num){
	var originalNum = num;
	var reverseNum = 0;
	
	while (num > 0){    
      reverseNum = (reverseNum*10) +(num%10);
      num = Math.floor(num/10);      
	}
	
	if(reverseNum==originalNum){
		palindromeArr.push(originalNum);
	}
}

while(num1<1000){
	while(num2<1000){
		isNumPalindrome(num1*num2);
		num2++;
	}
	num2 = 100;
	num1++;
}

var largestPalindrome = Math.max.apply(Math, palindromeArr);

document.write("<br><br>The largest palindrome = " + largestPalindrome);
