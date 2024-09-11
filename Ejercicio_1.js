let products = [
    {
        id_product: 1,
        product_name: "Camiseta",
        product_price: 50000,
        product_quantity: 89
    },
    {
        id_product: 2,
        product_name: "Pantalón",
        product_price: 90000,
        product_quantity: 44
    },
    {
        id_product: 3,
        product_name: "Chaqueta",
        product_price: 160000,
        product_quantity: 23 
    },
    {
        id_product: 4,
        product_name: "Correa",
        product_price: 80000,
        product_quantity: 104 
    }
]
//Map
let productsWithDollars = products.map((product) => {
    return {
        ...product,
        product_price_usd: product.product_price / 4000
    }
})
//Filter
let productsWithPrinceGreaterThan60 = products.filter((product) => {
    return product.product_price > 60000
})
//Reduce
let stockValue = products.reduce( function(accumulator, product) {
    return accumulator + (product.product_price * product.product_quantity)
}, 0)


console.log('Productos', products)
console.log('Productos con dólares', productsWithDollars)
console.log('Productos con precio mayor a 60.000', productsWithPrinceGreaterThan60)
console.log('Valor total del stock', stockValue)

const array1 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = products.reduce(
  (accumulator, product) => accumulator + product.product_price,
  initialValue
);

console.log('Suma total de los precios:', sumWithInitial);