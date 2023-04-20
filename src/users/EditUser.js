import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

    let navigate = useNavigate();

    const {id}=useParams();

    const [user,setUser]=useState({
        name:"",
        surname:"",
        number:"",
        email:"",
        age:""
      })

  const{name,surname,number,email,age} = user

  const onInputChange= (e) => { 

    setUser({...user,[e.target.name]:e.target.value});

  } 

  useEffect(()=>{
    loadUser();
  },[]);

  const onSubmit=async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`,user);
    navigate("/");
  }

  const loadUser = async ()=>{
    const result=await axios.get(`http://localhost:8080/user/${id}`);
    console.log(result);
    setUser(result.data);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Edit User</h2>

         <form > 
          <div className='mb-3'>
            <label htmlFor="Name" className='form-label'>
              Name
            </label>
            <input 
            type={"text"}
            className="form-control"
            placeholder='Enter your name'
            name="name"
            value={name}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="Name" className='form-label'>
              Surname
            </label>
            <input 
            type={"text"}
            className="form-control"
            placeholder='Enter your name'
            name="surname"
            value={surname}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="Number" className='form-label'>
              Number
            </label>
            <input 
            type={"text"}
            className="form-control"
            placeholder='Enter your name'
            name="number"
            value={number}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="Email" className='form-label'>
              E-mail
            </label>
            <input 
            type={"text"}
            className="form-control"
            placeholder='Enter your e-mail address'
            name="email"
            value={email}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="Age" className='form-label'>
              Age
            </label>
            <input 
            type={"text"}
            className="form-control"
            placeholder='Enter your e-mail address'
            name="age"
            value={age}
            onChange={(e)=>onInputChange(e)}
            />
          </div>

          <button type="submit" className='btn btn-outline-primary' onClick={onSubmit}>Submit</button>

          <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
          </form>
        </div>

      </div>
    </div>
  )
}