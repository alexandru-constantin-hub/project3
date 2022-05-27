import React, { useState } from 'react';
import axios from 'axios';

export default function Update() {
    const [nome, setNome] = useState('');
    const [budget, setBudget] = useState('');

    const updateAPIData = (id) => {
        axios.put(`http://localhost:8080/succursales/succursale/${id}`, {
        "nome":nome,    
        "budget":budget
        })
    }
    
    return (
        <div className='mb-4'>
            <form className='mb-4'>
                <div className='form-group'>
                    <label>Nome</label>
                    <input placeholder='Nome' value={nome}  onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Budget</label>
                    <input placeholder='Budget' value={budget} onChange={(e) => setBudget(e.target.value)} />
                </div>
                <button onClick={updateAPIData(nome)} type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}