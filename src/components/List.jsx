import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecordEdit from './RecordEdit';
import RecordView from './RecordView';

const List = () => {

    const [records, setRecords] = useState([]);
    const [editRecord, setEditRecord] = useState(null);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        fetchRecords();
    }, []);

    const fetchRecords = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/users');
            setRecords(response.data);
        } catch (error) {
            console.error('Erro ao buscar registros:', error);
        }
    }

    const handleEdit = (record) => {
        setEditRecord(record);
        setEditMode(true);
    }

    const handleCancel = () => {
        setEditMode(false);
    }

    const handleUpdate = async (updatedRecord) => {
        try {
            await axios.put(`http://127.0.0.1:8000/api/users/${updatedRecord.id}`, updatedRecord);
            setEditMode(false);
            fetchRecords();
        } catch (error) {
            console.error('Erro ao salvar as alterações:', error);
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/users/${id}`);
            fetchRecords();
        } catch (error) {
            console.error('Erro ao excluir o registro:', error);
        }
    }

    return (
        <div>
            <ul>
                {records.map(record => (
                    <li key={record.id}>
                        {editMode && editRecord.id === record.id ? (
                            <RecordEdit
                                record={record}
                                onUpdate={handleUpdate}
                                onCancel={handleCancel}
                            />
                        ) : (
                            <RecordView
                                record={record}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default List;