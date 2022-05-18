let price = 19.90;
let discount = 0.4;
let discountPrice = price * (1 - discount);
let prodName = 'Wine';
let category = 'Drinks';
let discountValue = 7.95;

    console.log("Product: " + prodName);
    console.log("Category: " + category);
    console.log("Price: U$" + price+"0");
    console.log("(40% OFFER) Saved: U$" + discountValue);
    console.log(`Total: U\$${discountPrice}`);
    