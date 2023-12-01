import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Update = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [rollno, setRollno] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setRollno(localStorage.getItem("rollno"));
        setEmail(localStorage.getItem("email"));
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://6538d7e9a543859d1bb208d2.mockapi.io/project-app/${id}`,
            {
                name: name,
                rollno: rollno,
                email: email,
            }
        )
            .then(() => {
                navigate("/read");
            });
    };
  return (
      <>
          <h2>Update</h2>
          <form style={{ width: "80%", marginLeft: "10%" }}>
              <div class="mb-3">
                  <label className="form-label">Student Name</label>
                  <input type="text" className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                  />
              </div>
              <div class="mb-3">
                  <label className="form-label">Student Roll No.</label>
                  <input type="text" className="form-control"
                      value={rollno}
                     onChange={(e) => setRollno(e.target.value)}
                  />
              </div>


              <div class="mb-3">
                  <label className="form-label">Email address</label>

                  <input type="email" className="form-control"
                      value={email}
                      aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)} 
                  />
              </div>

              <button type="submit" className="btn btn-primary" onClick={handleUpdate}>
                  Update
              </button>
              <Link to={'/read'}>
                  <button className="btn btn-secondary" style={{marginLeft:'5em'}} >
                      back
                  </button>
              </Link>
          </form>
         
      </>
  )
}

export default Update