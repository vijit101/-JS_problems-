//Write the program to convert tempF to into celcius and also to detect fever.
//Assign the final answer in result variable.
//Do not alter anything else given in the starter code

function main(tempF) {
    let result;
      let temp = (tempF -32)*(5/9);
    temp = temp.toFixed(1);
      if(temp===37){
        result = `You have a fever! Your temperature is ${temp}°C`;
      }
    else if(temp>37){
         result = `You have a fever! Your temperature is ${temp}°C`;
    }else if(temp < 37){
        result = "no fever";
    }
      
    // Step 1: Convert the temperature from Fahrenheit to Celsius.
   
    // Step 2: Store the converted temperature in a new variable. 
    
    // Step 3: Check if the rounded temperature is 37°C or higher with the help of if and else condition
    // Use the toFixed() method to format converted temperature in celcius to one decimal place.
  
    return result;
  }
   
   

  console.log(main(22));