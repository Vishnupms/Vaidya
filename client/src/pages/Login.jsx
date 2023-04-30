import { Button, Form,Input } from 'antd'
import React from "react";
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../redux/alertsSlice';




function Login() {
  const dispatch = useDispatch();
 
  const navigate  = useNavigate()
  const onFinish= async(values) =>{
    try {
      dispatch(showLoading())
      const response = await axios.post('/api/user/login',values)
      dispatch(hideLoading())
      
      if(response.data.success){
        toast.success(response.data.message)
        toast("redirecting to home page")
        localStorage.setItem("token",response.data.data)
        navigate("/")


      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      
      dispatch(hideLoading())
      toast.error("something went wrong")
    }
  }

  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Welcome Back</h1>
          <Form layout='vertical' onFinish={onFinish}>
           
            <Form.Item label='Email' name='email' required>
              <Input   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder= 'Email' title="please type email properly" required />
            </Form.Item>
            <Form.Item label='Password' name='password' required>
              <Input type='password' placeholder= 'Password' required />
            </Form.Item>

            <Button className= 'primary-button my-2' htmlType='submit'> Login</Button>

            <Link to='/register' className='anchor mt-2'>Click here to Register</Link>

          </Form>


      </div>
    </div>
  );
}

export default Login;
