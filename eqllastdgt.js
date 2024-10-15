function lastDigit(num1,num2){
    let answer = false;
    let len = num1.toString().length;
    let lastdgt = num1 % (10**(len-1));
    len = num2.toString().length;
    let lastdgtn2 = num2 % (10**(len-1));
    answer = (lastdgt === lastdgtn2);
    return answer;
}

function commonDigits(num1 =0 ,num2 =0 ){
    let answer = false;
    let len = num1.toString().length;
    let len1 = num2.toString().length;
    answer = len === len1;
    return answer;
}


console.log(lastDigit(1001,21));