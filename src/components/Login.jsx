import React, { useState } from 'react';
import axios from 'axios';
import Create from './Create';
import ReadAll from './ReadAll';
import Update from './Update';

export default function Login() {
    const [matricule, setMatricule] = useState('');
    const [parole, setParole] = useState('');
    const [response, setResponse] = useState('');
    
    const postData = (e) => {
        console.log(matricule+parole);
        e.preventDefault();
        axios.post(`http://localhost:8080/student/login`, {
            matricule,
            parole
        }).then(response => {
            setResponse(response);
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }
    return (
        
        <div className="container">
            {response.data != "OK" &&
            <form className='mb-4'>
                <h6>Login</h6>
                <div className='form-group'>
                    <label>Matricule</label>
                    <input placeholder='Nome' onChange={(e) => setMatricule(e.target.value)}/>
                </div>
                <div className='form-group'>
                    <label>Parole</label>
                    <input placeholder='Parole' onChange={(e) => setParole(e.target.value)}/>
                </div>
                <button onClick={postData} type='submit' className='btn btn-primary'>Submit</button>
            </form>
            }
            {response.data == "OK" &&
            <>
            <h6>Create une succursale</h6>
            <Create />
            <h6>Lire tout de succursales</h6>
            <ReadAll />
            <h6>Update une succursale</h6>
            <Update /></>
            }
        </div>

    
    )
}