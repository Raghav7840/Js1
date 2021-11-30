// Question no.4//
function primeNo(a) {
  if (a == 1) {
    return false;
  } else if (a == 2) {
    return true;
  } else {
    for (var i = 2; i < a; i++) {
      if (a % i == 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(primeNo(8));


//Question no. 3//

function reverse(n){
  var revnum=0, lastdigit;

while(n>0){
  lastdigit=n%10;
  revnum=(revnum*10)+lastdigit;
  n=parseInt(n/10);
}
return revnum;

}
console.log(reverse(83343));


//Question no.2//
  
      //  ??Sorry sir I dont understand how to do this question??  //


//Question no.1// 
function even(num){
  while(num!=0){
    if(num%2!==0){
      return not;
    }
    else{
      for(; num>=1; num--){
              if(num%2==0){
                    console.log(num);
                            num--;
        }

      }
    }
  }



}
even(100);






