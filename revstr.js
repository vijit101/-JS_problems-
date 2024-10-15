//complete the reverseString Function.
//Do not alter the starter Code.

function reverseString(str){
    let reverseStr = str.split("").reverse().join("");
    return reverseStr;
}

    console.log(reverseString("Hello"));
    //Output : "olleH"