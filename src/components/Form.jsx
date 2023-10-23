import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';
import InputMask from 'react-input-mask';

const Form = () => {
    const [formData, setFormData] = useState({
        cpf: '',
        nome: '',
        sobrenome: '',
        data_nascimento: '',
        email: '',
        genero: ''
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors({});

        if (!formData.cpf || !formData.nome || !formData.sobrenome || !formData.data_nascimento || !formData.email || !formData.genero) {
            setErrors({ all: 'Todos os campos são obrigatórios.' });
            return;
        }

        if (!isValidCPF(formData.cpf)) {
            setErrors({ ...errors, cpf: 'CPF inválido' });
            return;
        }

        if (!isValidDate(formData.data_nascimento)) {
            setErrors({ ...errors, data_nascimento: 'Data de nascimento inválida' });
            return;
        }

        if (!isValidEmail(formData.email)) {
            setErrors({ ...errors, email: 'E-mail inválido' });
            return;
        }

        axios.post('http://127.0.0.1:8000/api/users', formData)
            .then((response) => {
                console.log('Dados inseridos com sucesso:', response.data);
            })
            .catch((error) => {
                console.error('Erro ao inserir os dados:', error);

                if (error.response && error.response.status === 422) {
                    setErrors(error.response.data.errors);
                }
            });
    };

    const handleReset = () => {
        setFormData({
            cpf: '',
            nome: '',
            sobrenome: '',
            data_nascimento: '',
            email: '',
            genero: ''
        });
        setErrors({});
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>CPF</label>
                    <InputMask
                        mask="999.999.999-99"
                        type="text"
                        value={formData.cpf}
                        onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                    />
                    {errors.cpf && <span className="error">{errors.cpf}</span>}
                </div>
                <div className="form-group">
                    <label>Nome</label>
                    <input
                        type="text"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    />
                    {errors.nome && <span className="error">{errors.nome}</span>}
                </div>
                <div className="form-group">
                    <label>Sobrenome</label>
                    <input
                        type="text"
                        value={formData.sobrenome}
                        onChange={(e) => setFormData({ ...formData, sobrenome: e.target.value })}
                    />
                    {errors.sobrenome && <span className="error">{errors.sobrenome}</span>}
                </div>
                <div className="form-group">
                    <label>Data de Nascimento</label>
                    <input
                        type="date"
                        value={formData.data_nascimento}
                        onChange={(e) => setFormData({ ...formData, data_nascimento: e.target.value })}
                    />
                    {errors.data_nascimento && <span className="error">{errors.data_nascimento}</span>}
                </div>
                <div className="form-group">
                    <label>E-mail</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label>Gênero</label>
                    <select
                        name="genero"
                        value={formData.genero}
                        onChange={(e) => setFormData({ ...formData, genero: e.target.value })}
                    >
                        <option value="">Selecione</option>
                        <option value="Outro">Outro</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Masculino">Masculino</option>
                    </select>

                    {errors.genero && <span className="error">{errors.genero}</span>}
                </div>
                <div className="form-group">
                    <button type="submit" className="submit-button">Inserir</button>
                </div>
            </form>
            {errors.all && <span className="error">{errors.all}</span>}
            <button onClick={handleReset} className="reset-button">Recomeçar</button>
        </div>
    );
};

export default Form;

function isValidCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) {
        return false;
    }

    if (/^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let remainder = 11 - (sum % 11);

    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }

    if (remainder !== parseInt(cpf.charAt(9))) {
        return false;
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
    }
    remainder = 11 - (sum % 11);

    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }

    if (remainder !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}


function isValidDate(date) {
    return !isNaN(Date.parse(date));
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
