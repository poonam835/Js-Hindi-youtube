const accountId = 1986 /*const can not be changed*/
let accountEmail = "piu.97@gmail.com"
var accountPassword = "987654321"
accountCity = "gwalior" // also here without declaring a variable you can reserve a value, which is not a good practice
//here we are checcking what we can change after declaring
//aacountId = 1980  not allowed  
accountEmail = "rohan@gmail.com"
accountPassword = "11112222"
let accountState // in js if you declare a variable without giving value it acts as undefined
console.log(accountId);   
// if we can change the value in let and var both then we use diff , 
// we can use any of them ? so in js we can declare in both ways via let or var but prefer not to use var
        //because of issue in block scope and fucntional scope
console.log(accountEmail);
console.log(accountPassword);
//means var and let are re declarebale 

//to make it easy we are using here console.table 
console.table([accountEmail,accountId,accountPassword,accountCity,accountState]) // will print the vlaues in form of table




