import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState('');
 

  function getData() {
    
    axios.get(
      "https://6538d7e9a543859d1bb208d2.mockapi.io/project-app")
      .then((res) => {
        setData(res.data);
      });
    }
  
  function handleDelete(id) {
    axios.delete(`https://6538d7e9a543859d1bb208d2.mockapi.io/project-app/${id}`)
      .then((res) => {
        getData(res.data);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  const setToLocalStorage = (id, name, rollno, email) => {
    localStorage.setItem("id", id)
    localStorage.setItem("name", name)
    localStorage.setItem("rollno", rollno)
    localStorage.setItem("email", email)
}


 

return (
  <>
    <div class="form-check form-switch">
      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
        onClick={() => {
          if (tabledark === 'table-dark') setTableDark("")
          else setTableDark("table-dark")
      }}
      />
       
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '2em' }}>
      <h2>Data</h2>
      <Link to={'/'}>
        <button className="btn btn-info">Create</button>
      </Link>
    </div>
      <table className={`table ${tabledark}`} >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Student Name</th>
            <th scope="col">Student Roll No.</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
            <th scope="col">Action</th>
          </tr>
      </thead>
      
      {
        data.map((eachData) => {
        
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>

                  <td>{eachData.name}</td>
                  <td>{eachData.rollno}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button type="button" class="btn btn-success" onClick={() => setToLocalStorage(
                        eachData.id,
                        eachData.name,
                        eachData.rollno,
                        eachData.email
            
                      )}>Edit</button>
                    </Link>
                    
                  </td>
                  <td>
                    <button type="button" class="btn btn-danger" onClick={()=>handleDelete(eachData.id)}>Delete</button>
                  </td>

                </tr>




              </tbody>
            </>
          )
        })
     }
      </table>
    </>
  )
}

export default Read