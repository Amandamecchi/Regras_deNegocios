CREATE DATABASE evento;

\c evento;

CREATE TABLE ingresso (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    evento VARCHAR(255) NOT NULL,
    data_evento DATE NOT NULL,
    local_evento VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL
);

INSERT INTO ingresso (nome, email, evento, data_evento, local_evento, preco) VALUES ('JULIA', 'julia@gmail.com', 'SHOW', '2025-05-20', 'Festa do figo', 100.00);

INSERT INTO ingresso (nome, email, evento, data_evento, local_evento, preco) VALUES ('gioca', 'gioca@gmail.com', 'Rodeio', '2025-05-10', 'Jaguariuna', 350.00);

INSERT INTO ingresso (nome, email, evento, data_evento, local_evento, preco) VALUES ('Flavinha', 'flavinha@gmail.com', 'Rodeio', '2025-05-10', 'Jaguariuna', 350.00);