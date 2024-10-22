import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { useLocation, useNavigate } from 'react-router-dom'
import { clearError, loaduser, register } from '../../redux/Auth/Action'

const RegisterForm = ({ onClose}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const location = useLocation();
  const {user,jwt:jwt1,error} = useSelector(store=>store.auth)
 
  const handleSubmit = (e)=>{
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const userData = {
      firstName : data.get("firstName"),
      lastName : data.get("lastName"),
      email : data.get("email"),
      password : data.get("password"),
    }


    dispatch(register(userData))
    console.log(userData);
    onClose();


  }

  useEffect(()=>{
    if(jwt||jwt1){
      dispatch(loaduser(jwt || jwt1))
    }
    
  },[jwt,jwt1])

  useEffect(()=>{
    if (location.pathname === "/login" || location.pathname === "/register") {
      navigate(-1);
    }
    if(error){
      console.log(error);
      dispatch(clearError())
      onClose();
    }

  },[user,error])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} >
            <TextField
            required 
            id='firstName'
            name='firstName'
            label='First Name'
            fullWidth
            autoComplete='given-name'
            />
          </Grid>
          <Grid item xs={12} sm={6} >
            <TextField
            required 
            id='lastName'
            name='lastName'
            label='Last Name'
            fullWidth
            autoComplete='given-name'
            />
          </Grid>
          <Grid item xs={12}  >
            <TextField
            required 
            id='email'
            name='email'
            label='Email'
            fullWidth
            autoComplete='email'
            />
          </Grid>
          <Grid item xs={12}  >
            <TextField
            required 
            id='password'
            name='password'
            label='Password'
            fullWidth
            autoComplete='password'
            />
          </Grid>
          <Grid item xs={12}  >
<Button
className='w-full'
type='submit'
variant='contained'
size=' large'
sx={{padding:".8rem 0" , bgcolor :"#9155FD"}}
>
  Register
</Button>
          </Grid>

        </Grid>
      </form>

      <div className='flex justify-center flex-col items-center '>
        <div className='py-3 flex items-center '>
          <p>if you have already account ? </p>
          <Button onClick={()=>navigate("/login")}  className='ml-5 ' size='small'>Login</Button>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm