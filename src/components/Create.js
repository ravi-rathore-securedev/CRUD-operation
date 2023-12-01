
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'



const Create = () => {
    const [name, setName] = useState("")
    const [rollno, setRollno] = useState("")
    const [email, setEmail] = useState("")
const history = useNavigate()

    const header = {"Access-Control-Allow-Origin": "*"}

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
        axios.post(
            "https://6538d7e9a543859d1bb208d2.mockapi.io/project-app",
            {
                name: name,
                rollno: rollno,
                email: email,
                header,
            }
        )
            .then(() => {
                history("/read");
            });
    
    }



    return (
        <>
           <div style={{display:'flex',justifyContent:'space-between',margin:'2em'}}>
                <h2>Create</h2>
                <Link to={'/read'}>
                    <button className="btn btn-primary">Show Data</button>
                </Link>
            </div>
            <form style={{width:"80%",marginLeft:"10%"}}>
                <div class="mb-3">
                    <label className="form-label">Student Name</label>
                    <input type="text" className="form-control"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div class="mb-3">
                    <label className="form-label">Student Roll No.</label>
                    <input type="text" className="form-control"
                        onChange={(e) => setRollno(e.target.value)}
                    />
                </div>

                    
                <div class="mb-3">
                    <label  className="form-label">Email address</label>

                    <input type="email" className="form-control" aria-describedby="emailHelp" 
                    onChange={(e)=> setEmail(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </>
    )
}

export default Create;