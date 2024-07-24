import produto from '../models/Produto.js'

class produtoController {
    static async listarProdutos(req,res) {
        try {
            const listaProdutos = await produto.find({})
            res.status(200).json(listaProdutos)
        } catch (erro) {
            res.status(500).send({ message: `${erro.message} - Erro ao listar produtos`})
        }
    }

    static async listarProdutosPorId(req,res) {
        try {
            const id = req.params.id
            const produtoEncontrado = await produto.findById(id)
            res.status(200).json(produtoEncontrado)
        } catch (erro) {
            res.status(500).send({ message: `${erro.message} - Erro ao listar produtos`})
        }
    }

    static async cadastrarProdutos(req,res) {
        const novoProduto = req.body;
        try {
            res.status(200).send({message: "produto cadastrado com sucesso", produto: novoProduto})
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao cadastrar um novo produto ` })
        }
    }
    static async atualizarProduto(req,res){
        try {
            const id = req.params.id
            await produto.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Livro atualizado" })
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao atualizar o produto` })
        }
    }

    static async excluirProduto(req,res) {
        try {
            const id = req.params.id
            await produto.findByIdAndDelete(id, req.body)
            res.status(200).json({ message: "Produto excluído" })
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao excluir o produto` })
        }
    }
}

export default produtoController