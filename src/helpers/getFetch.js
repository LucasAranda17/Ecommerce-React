const productos=[
{"id":1,"nombre":"Zapatillas","precio":130000,"categoria":"Nike","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":2,"nombre":"Zapatillas","precio":160000,"categoria":"Adidas","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":3,"nombre":"Zapatillas","precio":120000,"categoria":"Nike","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":4,"nombre":"Zapatillas","precio":230000,"categoria":"Adidas","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":5,"nombre":"Zapatillas","precio":260000,"categoria":"Nike","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":6,"nombre":"Zapatillas","precio":220000,"categoria":"Adidas","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":7,"nombre":"Zapatillas ","precio":370000,"categoria":"Nike","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":8,"nombre":"Zapatillas","precio":320000,"categoria":"Adidas","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":9,"nombre":"Zapatillas","precio":360000,"categoria":"Nike","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":10,"nombre":"Zapatillas","precio":420000,"categoria":"Adidas","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":11,"nombre":"Zapatillas","precio":430000,"categoria":"Nike","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":12,"nombre":"Zapatillas","precio":450000,"categoria":"Adidas","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"}
];


export const getFetch = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos);

        },2000)
})