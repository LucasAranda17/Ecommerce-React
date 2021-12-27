const productos=[
{"id":1,"nombre":"Zapatillas Court Borough","stock":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ab at consectetur nisi perferendis deserunt iusto aut porro, ea vel","precio":130000,"categoria":"Hombre","cantidad":1,"imagen":"https://http2.mlstatic.com/D_NQ_NP_638433-MLA47833563697_102021-W.webp"},
{"id":2,"nombre":"Zapatillas Air Force","stock":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ab at consectetur nisi perferendis deserunt iusto aut porro, ea vel","precio":160000,"categoria":"Mujer","cantidad":1,"imagen":"https://http2.mlstatic.com/D_NQ_NP_886359-MLA47582509221_092021-W.webp"},
{"id":3,"nombre":"Zapatillas Air Max","stock":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ab at consectetur nisi perferendis deserunt iusto aut porro, ea vel","precio":120000,"categoria":"Hombre","cantidad":1,"imagen":"https://http2.mlstatic.com/D_NQ_NP_696000-MLA47326276226_092021-W.webp"},
{"id":4,"nombre":"Zapatillas Revolution 5","stock":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ab at consectetur nisi perferendis deserunt iusto aut porro, ea vel","precio":230000,"categoria":"Mujer","cantidad":1,"imagen":"https://http2.mlstatic.com/D_NQ_NP_818053-MLA48008731741_102021-W.webp"},
{"id":5,"nombre":"Zapatillas Downshifter","stock":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ab at consectetur nisi perferendis deserunt iusto aut porro, ea vel","precio":260000,"categoria":"Hombre","cantidad":1,"imagen":"https://http2.mlstatic.com/D_NQ_NP_807023-MLA48100603525_112021-W.webp"},
{"id":6,"nombre":"Zapatillas Excee","stock":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ab at consectetur nisi perferendis deserunt iusto aut porro, ea vel","precio":220000,"categoria":"Mujer","cantidad":1,"imagen":"https://http2.mlstatic.com/D_NQ_NP_933693-MLA47585543323_092021-W.webp"},
{"id":7,"nombre":"Zapatillas Wearallday","stock":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ab at consectetur nisi perferendis deserunt iusto aut porro, ea vel","precio":370000,"categoria":"Hombre","cantidad":1,"imagen":"https://http2.mlstatic.com/D_NQ_NP_940512-MLA47582592223_092021-W.webp"},
{"id":8,"nombre":"Zapatillas Venture","stock":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ab at consectetur nisi perferendis deserunt iusto aut porro, ea vel","precio":320000,"categoria":"Mujer","cantidad":1,"imagen":"https://http2.mlstatic.com/D_NQ_NP_603297-MLA47515083806_092021-W.webp"},
{"id":9,"nombre":"Zapatillas ","stock":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ab at consectetur nisi perferendis deserunt iusto aut porro, ea vel","precio":360000,"categoria":"Hombre","cantidad":1,"imagen":"https://http2.mlstatic.com/D_NQ_NP_806024-MLA48329602142_112021-W.webp"},
{"id":10,"nombre":"Zapatillas","stock":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ab at consectetur nisi perferendis deserunt iusto aut porro, ea vel","precio":420000,"categoria":"Mujer","cantidad":1,"imagen":"https://http2.mlstatic.com/D_NQ_NP_751763-MLA47219223914_082021-W.webp"},
{"id":11,"nombre":"Zapatillas","stock":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ab at consectetur nisi perferendis deserunt iusto aut porro, ea vel","precio":430000,"categoria":"Hombre","cantidad":1,"imagen":"https://http2.mlstatic.com/D_NQ_NP_628782-MLA44709293115_012021-W.webp"},
{"id":12,"nombre":"Zapatillas","stock":4,"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ab at consectetur nisi perferendis deserunt iusto aut porro, ea vel","precio":450000,"categoria":"Mujer","cantidad":1,"imagen":"https://http2.mlstatic.com/D_NQ_NP_943610-MLA47515078690_092021-W.webp"}
];


export const getFetch = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos);

        },2000)
})