module.exports = function(app){
    app.get('/pagamentos', function(req, res){
        console.log("Recebida requisiçaõ de teste.");
        res.send('Ok.');
    });

    app.post('/pagamentos/pagamento', function(req, res){
        let pagamento = req.body;
        console.log('processando requisicao de um novo pagamento');
        
        pagamento.status = 'CRIADO';
        pagamento.data = new Date;

        res.send(pagamento);
    })
}