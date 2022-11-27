import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = () => {

  const [inputs,setInputs]=useState({
    username:"",
    email:"",
    password:""
  })
  const[err,setError]=useState(null)
  const navigate=useNavigate()

  const handleChange=e=>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }


  const handleSubmit= async e=>{
    e.preventDefault()
    try{

      await axios.post("http://localhost:4000/api/auth/register",inputs)
      navigate("/login")
      
    }
    catch(err){
      // setError(err.response.data);
      console.log(err)
    }
  }
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form >
      <input required  type="email" placeholder='E-mail Address'name='email' onChange={handleChange} />
       < input required type="text" placeholder='Username' name='username' onChange={handleChange}/>
        <input required type="password" placeholder='Password' name='password' onChange={handleChange} />
        
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>Already have an account? <Link to='/login'>Login</Link></span>
      </form>
    </div>
  )
}

export default Register