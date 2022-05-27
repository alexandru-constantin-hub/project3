import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default function ReadAll() {
    const [APIData, setAPIData] = useState([]);
useEffect(() => {
       
}, [])

useEffect(() => {
    axios.get(`http://localhost:8080/succursales/succursales`)
        .then((response) => {
            setAPIData(response.data);
        })
}, [])

const onDelete = (id) => {
    axios.delete(`http://localhost:8080/succursales/succursale/${id}`)
    .then(() => {
        getData();
    })
  }

  const getData = () => {
    axios.get(`http://localhost:8080/succursales/succursales`)
        .then((getData) => {
             setAPIData(getData.data);
         })
    }

    return (
        <table className="table">
            <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Budget</th>
      <th scope="col">Action</th>
    
    </tr>
  </thead>
        <tbody>
  {APIData.map((data) => {
     return (
       <tr key={data.nome}>
          <td>{data.nome}</td>
           <td>{data.budget}</td>
           <td><button className="btn btn-primary" onClick={() => onDelete(data.nome)}>Delete</button></td>
        </tr>
   )})}
</tbody>
</table>
    )
}

