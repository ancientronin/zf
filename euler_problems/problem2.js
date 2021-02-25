var x = 1;
var y = 2;
var z = 0;
var f = 0;
for(;y<4000000;){
    z = x+y;
    x = y;
   if(y % 2 == 0){
        f = f+y;
    }
    y = z;
}
console.log(f);
