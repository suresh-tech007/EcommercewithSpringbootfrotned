import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { clearError, loaduser, login } from '../../redux/Auth/Action';

const LoginForm = ({onClose}) => {
  const dispatch = useDispatch();
  const location = useLocation();
 
  const jwt = localStorage.getItem("jwt");
  const {user,jwt:jwt1,error} = useSelector(store=>store.auth)
 
  
 
  const navigate = useNavigate();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      email : data.get("email"),
      password : data.get("password"),
    }
   await dispatch(login(userData));
    onClose();


  }
  useEffect(()=>{
    if(jwt||jwt1){
      dispatch(loaduser(jwt || jwt1))
    }
    
  },[jwt,jwt1])

  useEffect(()=>{
    if (user) {
      if (location.pathname === "/login" || location.pathname === "/register") {
        navigate(-1);
      }
      
    }
  },[user])

  useEffect(() => {
    if(error != null){
      console.log(error);
      dispatch(clearError())
      onClose()
    }
  }, [error])
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
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
  Login
</Button>
          </Grid>

        </Grid>
      </form>

      <div className='flex justify-center flex-col items-center '>
        <div className='py-3 flex items-center '>
          <p>if you don't have  already account ? </p>
          <Button onClick={()=>navigate("/register")}  className='ml-5 ' size='small'>Register</Button>

        </div>
        
      </div>
    </div>
  )
}

 

export default LoginForm;