const ingressoModel = require('../models/ingressoModel');

const getAllIngressos = async (req, res) => {
    try {
        const ingressos = await ingressoModel.getIngressos();
        res.status(200).json(ingressos);
    } catch (error) {
        console.error("Erro ao buscar ingressos:", error); // Adiciona log de erro
        res.status(500).json({ message: "erro ao buscar ingressos" });
    }
};

const getIngressoById = async (req, res) => {
    try {
        const ingresso = await ingressoModel.getIngressoById(req.params.id);
        if (ingresso) {
            res.status(200).json(ingresso);
        } else {
            res.status(404).json({ message: "ingresso não encontrado" });
        }
    } catch (error) {
        console.error("Erro ao buscar ingresso:", error); // Adiciona log de erro
        res.status(500).json({ message: "erro ao buscar ingresso" });
    }
};

const createIngresso = async (req, res) => {
    const { nome, email, evento, data_evento, local_evento, preco } = req.body;
    try {
        const newIngresso = await ingressoModel.createIngresso(nome, email, evento, data_evento, local_evento, preco);
        res.status(201).json(newIngresso);
    } catch (error) {
        console.error("Erro ao criar ingresso:", error); // Adiciona log de erro
        res.status(500).json({ message: "erro ao criar ingresso" });
    }
};

const updateIngresso = async (req, res) => {
    const { nome, email, evento, data_evento, local_evento, preco } = req.body;
    try {
        const updatedIngresso = await ingressoModel.updateIngresso(req.params.id, nome, email, evento, data_evento, local_evento, preco);
        if (updatedIngresso) {
            res.status(200).json(updatedIngresso);
        } else {
            res.status(404).json({ message: "ingresso não encontrado" });
        }
    } catch (error) {
        console.error("Erro ao atualizar ingresso:", error); // Adiciona log de erro
        res.status(500).json({ message: "erro ao atualizar ingresso" });
    }
};

const deleteIngresso = async (req, res) => {
    try {
        const deletedIngresso = await ingressoModel.deleteIngresso(req.params.id);
        if (deletedIngresso) {
            res.status(200).json({ message: "ingresso deletado com sucesso" });
        } else {
            res.status(404).json({ message: "ingresso não encontrado" });
        }
    } catch (error) {
        console.error("Erro ao deletar ingresso:", error); // Adiciona log de erro
        res.status(500).json({ message: "erro ao deletar ingresso" });
    }
};

const vendaIngresso = async (req, res) => {
    try {
        const { id, quantidade } = req.body;
        const result = await ingressoModel.vendaIngresso(id, quantidade);
        res.json(result);
    } catch (error) {
        console.error("Erro ao vender ingresso:", error); // Adiciona log de erro
        res.status(400).json({ erro: error.message });
    }
};

module.exports = {
    getAllIngressos,
    getIngressoById,
    createIngresso,
    updateIngresso,
    deleteIngresso,
    vendaIngresso
};