/* A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers. */

function palindromeCheck(num){
    let number = num
    let newNumber = 0;
    const arr = [];
    while (number > 0){
    arr.push(number%10);
    number = parseInt(number/10);
    }
    for(i=0;i<arr.length;++i){
        newNumber = newNumber + (arr[i]*Math.pow(10, arr.length-1-i))
    }
    if(num == newNumber){
        return true;
    }
    else{
        return false;
    }
} 

function largestPalindromeOf(numOfDigits){
    factorLimit = Math.pow(10, numOfDigits) -1;
    productLimit = Math.pow(factorLimit, 2);
    console.log(productLimit);
    for(i=productLimit;i>0;--i){
        let num = i;
        if (palindromeCheck(num) == true){
            console.log(num);
            break;
        }
    }
}