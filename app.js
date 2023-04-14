const ConsultaImoveis = new (require('./ConsultaImoveis'))();

(async () => {
    let imoveis = await ConsultaImoveis.consultar([
        ["SC", []],
        ["AC", [],],
        ["AP", [],],
        ["BA", [],],
        ["AM", [],],
        ["AL", [],]
    ])
    console.log("IMOVEIS")
    console.log(JSON.stringify(imoveis))
})();