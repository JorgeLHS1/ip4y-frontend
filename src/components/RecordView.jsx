import React from 'react';

const RecordView = ({ record, onEdit, onDelete }) => {

    return (
        <div>
            <label>CPF</label>
            <span>{record.cpf}</span>

            <label>Nome</label>
            <span>{record.nome}</span>

            <label>Sobrenome</label>
            <span>{record.sobrenome}</span>

            <label>Data de Nascimento</label>
            <span>{record.data_nascimento}</span>

            <label>E-mail</label>
            <span>{record.email}</span>

            <label>Gênero</label>
            <span>{record.genero}</span>

            <br/>
            
            <button onClick={() => onEdit(record)} className="edit-button">Editar</button>
            <button onClick={() => onDelete(record.id)} className="delete-button">Excluir</button>
        </div>
    );

};

export default RecordView;