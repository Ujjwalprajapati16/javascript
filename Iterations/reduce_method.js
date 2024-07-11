const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((accumulator, currentValue) => {
    console.log(`accumulator: ${accumulator}, current value: ${currentValue}`);
    return accumulator + currentValue;
}, 0);

console.log(`sum : ${sum}`); // Output: 15

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

const totalPrice = shoppingCart.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
}, 0);

console.log(`Total price: ${totalPrice}`); // Output: 33997