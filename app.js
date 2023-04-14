const ConsultaImoveis = new (require('./ConsultaImoveis'))();

(async () => {
    let imoveis = await ConsultaImoveis.consultar([
        ["SC", []],
        ["AC", [],],
        ["AP", [],],
        ["BA", [],],
        ["AM", [],],
        ["AL", [],],
        ["CE", [],],
        ["DF", [],],
        ["ES", [],],
        ["GO", [],],
        ["MA", [],],
        ["MG", [],],
        ["MT", [],],
        ["PA", [],],
        ["PB", [],],
        ["PE", [],],
        ["PI", [],],
        ["PR", [],],
        ["RJ", [],],
        ["RN", [],],
        ["RO", [],],
        ["RR", [],],
        ["RS", [],],
        ["SE", [],],
        ["SP", [],],
        ["TO", [],],
    ])
    console.log("IMOVEIS")
    console.log(JSON.stringify(imoveis))
})();