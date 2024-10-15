//complete the calculatePrice function
//Do not alter the starter code
const goods = {
    apple: { price: 150, quantity: 2 },
    banana: { price: 75, quantity: 3 },
    orange: { price: 125, quantity: 1 }
    };    
    function calculatePrice(goods){
        //Implement your function here
        let cost = 0;
        console.log(goods.banana.price);
        for(let key in goods){
            if(goods.hasOwnProperty(key)){
                cost += goods[key].price * goods[key].quantity;
            }
            
        }
        return cost;
    }
    console.log(calculatePrice(goods));
    //output : 650