var x = 0;
for(let i=0;i<1000;++i){
    if(i % 3 == 0){
        x = x + i;
    }
    else if(i % 5 == 0){
        x = x + i;
    }
}
console.log(x);