// Default fields
const amount = 0;
const category = ['Food','Groceries','Transportation','Utilities','Phone','House','Clothes',
'Car','Entertainment','Beauty','Socializing','Books','Insurance','Tax','Health','Education','Transfer fee'];
const account = ['Cash', 'Bank', 'Octopus', 'Payme', 'IB', 'Crypto'];
  
// Operation & Output data
const getAmount = (obj, value) => {
    // Total balance
    const results = [];
    for (let i = 0; i < value; i += 1){
        results.push(obj[i].Amount);
    }
    console.log("Results: " + results); 
    var sum = 0;
    for (let a = 0; a < results.length; a +=1 ) {
        sum += results[a]
    }
    console.log("Total balance: " + sum);

    // Total cash balance
    var cash = [];
    for (let b = 0; b < value; b += 1){
        if (obj[b].Account == 'Cash'){
            cash.push(obj[b].Amount);
        }
    }
    console.log("Cash: " + cash);
    var cashSum = 0;
    for (let c = 0; c < cash.length; c +=1 ) {
        cashSum += cash[c]
    }
    console.log("cashSum is: " + cashSum);

    // Total bank balance
    var bank = [];
    for (let e = 0; e < value; e += 1){
        if (obj[e].Account == 'Bank'){
            bank.push(obj[e].Amount);
        }
    }
    console.log("Bank: " + bank);
    var bankSum = 0;
    for (let d = 0; d < bank.length; d +=1 ) {
        bankSum += bank[d]
    }
    console.log("bankSum is: " + bankSum);
   

    
    
    document.getElementById("app").innerHTML = "Total balance: " + sum + "<br/> Cash: " + cashSum + 
    "<br/> Bank: " + bankSum;
}


// User input data
const obj = 
{
    "data":[
      {"Amount":150, "Category":category[1],"Account":account[0]},
      {"Amount":40, "Category":category[2],"Account":account[1]},
      {"Amount":20, "Category":category[2],"Account":account[0]}
    ]
}

const matthew = getAmount(obj.data,Object.keys(obj.data).length);

