import React, { useState } from 'react';
import axios from 'axios';

export default function Create() {
    const [nome, setNome] = useState('');
    const [budget, setBudget] = useState('');
    
    const postData = () => {
        axios.post(`http://localhost:8080/succursales/succursale`, {
            nome,
            budget
        }).then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }
    return (
        <div>
            <form className='mb-4'>
                <div className='form-group'>
                    <label>Nome</label>
                    <input placeholder='Nome' onChange={(e) => setNome(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label>Budget</label>
                    <input placeholder='Budget' onChange={(e) => setBudget(e.target.value)}/>
                </div>
                <button onClick={postData} type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}