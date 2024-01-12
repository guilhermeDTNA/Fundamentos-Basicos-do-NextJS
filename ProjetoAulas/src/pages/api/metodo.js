export default (req, res) => {
    if(req.method === "GET"){
        res.status(200).json({nome: "Guilherme"})
    } else{
        res.status(200).json({nome: "Amanda"})
    }
}