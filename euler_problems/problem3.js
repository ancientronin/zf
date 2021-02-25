function primeNumberChecker(num){
    let isPrime = true;
    for(j=2;j<num;++j){
        if(num % j == 0){
            isPrime = false;
        }
        else{
            null;
        }
    }
    return(isPrime);
}

factorArr = [];

function largestFactorFinder(num){
    for(i=num-1;i>1;--i){
        if(num % i == 0){
            console.log(i);
            break;
            }
        }
}
function primeFactorFinder(num){
    for(i=num;i>1;--i){
        if((num % i == 0)&&(primeNumberChecker(i))){
            console.log(i);
            }
        }
}

function lowestFactorFinder(num){
    for(i=2;i<num;++i){
        if(num % i == 0){
            return(i);
            }
        }
}
function lowestPrimeFactorFinder(num){
    for(i=2;i<num;++i){
        if((num % i == 0)&&(primeNumberChecker(i))){
            console.log(i);
            break;
            }
        }
}

function largestFactorPrimeChecker(num){

    let x = lowestFactorFinder(num);
  

}