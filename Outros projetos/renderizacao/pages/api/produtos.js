function numeroAleatorio(min = 1, max = 100000){
    return parseInt(Math.random() * (max-min)) + min
}

export default function handler(req, res){
    res.status(200).json([
        {id: numeroAleatorio(), nome: "Caneta", preco:"5.60"},
        {id: numeroAleatorio(), nome: "Caderno", preco:"10.00"},
        {id: numeroAleatorio(), nome: "Borracha", preco:"2.50"},
        {id: numeroAleatorio(), nome: "Tesoura", preco:"5.25"}
    ])
}