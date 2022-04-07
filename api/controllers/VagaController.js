const database = require('../models')

class VagaController {
    static async pegartodasAsVagas(req, res) {
        try {
            const todasAsVagas = await database.Vaga.findAll()
            return res.status(200).json(todasAsVagas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaVaga(req, res) {
        const { id } = req.params
        try {
            const umaVaga = await database.Vaga.findOne({
                where:{
                    id: Number(id)
                }
            })
            return res.status(200).json(umaVaga)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaVaga(req, res){
        const novaVaga = req.body
        
        try {
            const novaVagaCria = await database.Vaga.create(novaVaga)
            return res.status(200).json(novaVagaCria)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaVaga(req, res){
        const {id} = req.params
        const novasInfos = req.body
        try {
            await database.Vaga.update(novasInfos, {
                where:{id:Number(id)}
            })
            const vagaAtualizada = await database.Vaga.findOne({
                where:{id:Number(id)}
            })
            return res.status(200).json(vagaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaVaga(req, res){
        const {id} = req.params

        try {
            await database.Vaga.destroy({
                where:{id:Number(id)}
            })
            return res.status(200).json({mensagem:`O registro ${id}, foi deletado!`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = VagaController