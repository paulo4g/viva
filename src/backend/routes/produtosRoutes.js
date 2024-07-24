import express from "express";
import produtoController from "../controllers/produtoController.js";

const routes = express.Router()

routes.get('/produtos', produtoController.listarProdutos)
routes.get('/produtos/:id', produtoController.listarProdutosPorId)
routes.post('/produtos', produtoController.cadastrarProdutos)
routes.put('/produtos/:id', produtoController.atualizarProduto)
routes.delete('/produtos/:id', produtoController.excluirProduto)

export default routes