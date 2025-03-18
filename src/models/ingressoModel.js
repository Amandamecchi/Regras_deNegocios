const pool = require('../config/database');

const getIngressos = async () => {
    const { rows } = await pool.query('SELECT * FROM ingresso');
    return rows;
};

const getIngressoById = async (id) => {
    const { rows } = await pool.query('SELECT * FROM ingresso WHERE id = $1', [id]);
    return rows[0];
};

const createIngresso = async (nome, email, evento, data_evento, local_evento, preco) => {
    const { rows } = await pool.query(
        'INSERT INTO ingresso (nome, email, evento, data_evento, local_evento, preco) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [nome, email, evento, data_evento, local_evento, preco]
    );
    return rows[0];
};

const updateIngresso = async (id, nome, email, evento, data_evento, local_evento, preco) => {
    const { rows } = await pool.query(
        'UPDATE ingresso SET nome = $1, email = $2, evento = $3, data_evento = $4, local_evento = $5, preco = $6 WHERE id = $7 RETURNING *',
        [nome, email, evento, data_evento, local_evento, preco, id]
    );
    return rows[0];
};

const deleteIngresso = async (id) => {
    const { rowCount } = await pool.query('DELETE FROM ingresso WHERE id = $1', [id]);
    return rowCount > 0;
};

const vendaIngresso = async (id, quantidade) => {
  
};

module.exports = {
    getIngressos,
    getIngressoById,
    createIngresso,
    updateIngresso,
    deleteIngresso,
    vendaIngresso
};

