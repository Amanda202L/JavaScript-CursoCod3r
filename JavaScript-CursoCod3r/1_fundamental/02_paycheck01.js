let prod = "Lilic Wine";
let quant = 10; 
let price = 25.50;
let discount = 12.75;
let taxes = 4.35;
let finalPrice = price * quant - discount + taxes;
let cash = 400.00;
let back = 13.27;

    console.log(prod + " units x " + quant + " U$" + price * quant + ".00");
    prod = 'Red Wine';
    quant = 5;
    price = 29.90;
    console.log(prod + " units x " + quant + " U$" + price * quant + "0");
    finalPrice = 255 + 149.50;
    console.log("TOTAL: U$" + `${finalPrice}0`);
    descont = 20.20; 
    console.log("------------");

    console.log('NICE DISCOUNT 5%: U$' + discount + "5");
    taxes = 2.42;
    console.log("TAXES: (0.6%): U$" + taxes);
    finalPrice = finalPrice - discount + taxes;
    console.log("SUBTOTAL: U$" + finalPrice);
    console.log('PAYED: U$' + cash +".00");
    console.log('RETURN: U$' + `${back}`);

