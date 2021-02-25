function hello(num){
    for(i=2;i<num;++i){
        if(num%i==0){
            console.log(i + "is a factor");
            }
        }
    }

function primeChecker(num){
    var isPrime = true;
    for(i=2;i<num;++i){
        if(num%i==0){
            isPrime == false;
            break;
        }
    }
    return(isPrime);
}