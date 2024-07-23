/* MEDLEARS */
//protejer rotas qeue não estejam autenticadas, por exemplo, se eu logar e copiar o link, mesmo deslogando, com este link colado consigo acessar sem precisar deslogar
//Obs. um dos processos finais para criação do projeto
module.exports.checkAuth = function (req, res, next){
    const userid = req.session.userid

    if(!userid){
        res.redirect('/login')
    }

    next()
}