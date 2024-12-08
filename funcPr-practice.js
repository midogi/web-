const cart = [
  { item: " 노트북", price: 1200000, quantity: 1 }, 
  { item: " 마우스", price: 35000, quantity: 2 }, 
  { item: " 키보드", price: 89000, quantity: 1 } 
];
let totalPrice = 0;
for (let i=0; i<cart.length; i++){
  totalPrice += cart[i].price * cart[i].quantity;
};
console.log(`total price = ${totalPrice}`);

cart.forEach(goods=>{
  totalPrice += goods.price * goods.quantity;
}
);
console.log(`total price = ${totalPrice}`);

totalPrice = cart.reduce(
  (sum, goods)=> sum + goods.price * goods.quantity, 0
);
console.log(`total price = ${totalPrice}`);

const itemTotals = cart.map(goods=>({
  item:goods.item, total:goods.price * goods.quantity
}));
console.log(`total price = ${totalPrice}`);

function a() {
  return {name:'hjh', aff:'hansung'};
}
console.log(a());

const names = ['alice', 'bob', 'charlie'];
const uppercasedNames = names.map(
  n=>n.toUpperCase()
);
console.log(`upper cased names: ${uppercasedNames}`);

const capitalStartnames = names.map(
  n=>n[0].toUpperCase() + n.slice(1)
);
console.log(`upper cased names: ${uppercasedNames}`);
