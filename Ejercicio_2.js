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
];

const sumaPrecios = products.reduce((acumulador, producto) => {
    return {
      totalPrice: acumulador.totalPrice + producto.product_price, 
      totalQuantity: acumulador.totalQuantity + producto.product_quantity 
    };
  }, { totalPrice: 0, totalQuantity: 0 });

const productoMasCaro = products.sort((a, b) => b.product_price - a.product_price)[0];

const result = {
    ...sumaPrecios, 
    productoMasCaro: {
      product_name: productoMasCaro.product_name,
      product_price: productoMasCaro.product_price,
      product_quantity: productoMasCaro.product_quantity
    }
  };
  
  console.log(result);