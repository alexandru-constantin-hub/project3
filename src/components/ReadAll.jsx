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

    return (
        <table className="table">
            <thead>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">Budget</th>
    
    </tr>
  </thead>
        <tbody>
  {APIData.map((data) => {
     return (
       <tr className='row' key={data.nome}>
          <td>{data.nome}</td>
           <td>{data.budget}</td>
        </tr>
   )})}
</tbody>
</table>
    )
}

