module.exports = function(app){
    app.get('/pagamentos', function(req, res){
        console.log("Recebida requisiçaõ de teste.");
        res.send('Ok.');
    });
}