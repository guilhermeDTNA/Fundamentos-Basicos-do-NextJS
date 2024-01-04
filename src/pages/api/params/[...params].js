// Múltiplos parâmetros
export default (req, res) => {
    res.status(200).send({parametros: req.query})
}