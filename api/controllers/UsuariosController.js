const database = require('../models')
const bcryptjs = require('bcryptjs');

class UsuariosController{

    static async pegartodasOsUsuarios(req, res) {
        try {
            const todasOsUsuarios = await database.Usuarios.findAll()
            return res.status(200).json(todasOsUsuarios)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmUsuario(req, res) {
        const { id } = req.params
        try {
            const umaPessoa = await database.Usuarios.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umaPessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaUsuario(req, res) {
        const {email, senha} = req.body
        
        
        try{
            const hash = await bcryptjs.hash(senha, 10)
            const novoUsuarioCriado = await database.Usuarios.create({email, senha: hash})
            return res.status(200).send(novoUsuarioCriado)
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaUsuario(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Usuarios.update(novasInfos, {
                where: { id: Number(id) }
            })
            const usuarioAtualizada = await database.Usuarios.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(usuarioAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaUsuario(req, res) {
        const { id } = req.params

        try {
            await database.Usuario.destroy({
                where: { id: Number(id) }
            })
            return res.status(200).json({ mensagem: `O registro ${id}, foi deletado!` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    /*async adicionaSenha(senha){
        validacoes.campoStringNaoNulo(senha, 'senha');
        validacoes.campoStringNaoNulo(senha, 'senha', 8);
        validacoes.campoStringNaoNulo(senha, 'senha', 64);

        this.senhaHash = await Usuarios.gerarSenhaHash(senha)
    }

    static gerarSenhaHash(senha){
        const custoHash = 12
        return bcrypt.hash(senha, custoHash)
    }
    */

}
module.exports = UsuariosController