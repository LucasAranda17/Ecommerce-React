const productos=[
{"id":1,"nombre":"Amd Apu E1 6010","precio":130000,"categoria":"BAJO","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":2,"nombre":"B02 E1 Amd Apu E1","precio":160000,"categoria":"BAJO","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":3,"nombre":"Bangho B02 E1 Amd","precio":120000,"categoria":"BAJO","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":4,"nombre":"Intel Core I3 9na","precio":230000,"categoria":"MEDIO","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":5,"nombre":"Pc Armada Iqual","precio":260000,"categoria":"MEDIO","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":6,"nombre":"Pc Armada Intel Core","precio":220000,"categoria":"MEDIO","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":7,"nombre":"Pc Gamer Amd Ryzen 3 ","precio":370000,"categoria":"MEDIO-ALTO","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":8,"nombre":"PC Amd Ryzen 3 8gb","precio":320000,"categoria":"MEDIO-ALTO","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":9,"nombre":" Yugen Pc Amd Ryzen 3","precio":360000,"categoria":"MEDIO-ALTO","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":10,"nombre":"PC Haku Plus Core I5","precio":420000,"categoria":"ALTO","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":11,"nombre":"PC Gamer  Plus Core I5","precio":430000,"categoria":"ALTO","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"},
{"id":12,"nombre":"PC Gamer Haku Plus","precio":450000,"categoria":"ALTO","cantidad":1,"imagen":"https://redsport.vteximg.com.br/arquivos/ids/1056926-1000-1000/GA025049010.jpg?v=637372505406900000"}
];


export const getFetch = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos);

        },2000)
})