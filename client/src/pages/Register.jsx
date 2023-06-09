import { Button, Form,Input } from 'antd'
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux';
import { showLoading,hideLoading } from '../redux/alertsSlice';
import Password from 'antd/es/input/Password';




function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish= async(values) =>{
   
    try {
      dispatch(showLoading())
      
      const response = await axios.post('/api/user/register',values)
      dispatch(hideLoading())
      
      if(response.data.success){
        toast.success(response.data.message)
        toast("redirecting to login page")
        navigate("/login")


      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      dispatch(hideLoading())
      
      
      
      toast.error("Something went wrong")
     
    }
    console.log(values);
  }


  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">HELLO FRIEND... !</h1>
          <Form layout='vertical' onFinish={onFinish}>
            <Form.Item label='Name' name='name' required>
              <Input required placeholder= 'Name' />
            </Form.Item>
            <Form.Item label='Email' name='email' required>
              <Input required placeholder= 'Email' />
            </Form.Item>
            <Form.Item label='Password' name='password' required>
              <Input type='password' placeholder= 'Password' required />
            </Form.Item >
            <Form.Item  label='Confirm Password' name='confirm'required>
              <Input type='password' placeholder= 'Confirm Password' required />
            </Form.Item>

            <Button className= 'primary-button my-2' htmlType='submit'> Register</Button>

            <Link to='/login' className='anchor mt-2'>Click here to Login</Link>

          </Form>


      </div>
    </div>
  );
}

export default Register;
