import React, { useState } from 'react';

const RecordEdit = ({ record, onCancel, onUpdate }) => {

    const [editedRecord, setEditedRecord] = useState(record);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setEditedRecord({
            ...editedRecord,
            [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onUpdate(editedRecord);
    }

    return (
        <form className="record-edit" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>CPF</label>
                <input
                    type="text"
                    name="cpf"
                    value={editedRecord.cpf}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Nome</label>
                <input
                type="text"
                    name="nome"
                    value={editedRecord.nome}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label>Sobrenome</label>
                <input
                type="text"
                    name="sobrenome"
                    value={editedRecord.sobrenome}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
            <label>Email</label>
            <input
                type="email"
                name="email"
                value={editedRecord.email}
                onChange={handleChange}
            />
            </div>
            <div className="form-group">
            <label>Data de Nascimento</label>
            <input
                name="data_nascimento"
                type="date"
                value={editedRecord.birthDate}
                onChange={handleChange}
            />
            </div>
            <div className="form-group">
            <label>Gênero</label>
            <select
                name="genero"
                value={editedRecord.gender}
                onChange={handleChange}
            >
                <option value="Selecione" disabled>Selecione</option>
                <option value="Outro">Outro</option>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
            </select>
            </div>

            <button className="btn btn-save">Salvar</button>
            <button className="btn btn-cancel" onClick={onCancel}>Cancelar</button>

        </form>
    );

}

export default RecordEdit;