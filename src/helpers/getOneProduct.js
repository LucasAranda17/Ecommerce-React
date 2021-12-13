const oneProduct = {
    id: 1,
    image:
    "https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000",
    title: "Zapatillas Azul",
    descripcion: "este es el primer producto",
    categoria: "Nike",
    price: "73000",
    stock: "4",
  };
  
  const getOneProduct = new Promise((resolve) => {
    setTimeout(() => {
      resolve(oneProduct);
    }, 2000);
  });
  
  export default getOneProduct;
  