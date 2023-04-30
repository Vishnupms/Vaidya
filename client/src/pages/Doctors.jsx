
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import Layout from '../components/Layout';

export default function Doctors() {
  const[doctors,setDoctors] = useState([])


    useEffect(()=>{
        const fetchDoctors =async()=>{
          const {data} = await axios.get("/api/user/list",{   headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },})
          if(data) setDoctors(data)
        
        }
        fetchDoctors()
          },[])
  return (
    <Layout>
    <h2><b>Doctors List</b></h2>
    <div className="list text-center">
        {doctors.map((docs)=>{
            return( <Card size="small"  style={{ width: 200, backgroundColor:'#a2ebeb' }}>
  
       <p><h4>{docs.name}</h4></p>  
      <p>{docs.department}</p>
      <p>{docs.designation}</p>  
      {<a href="#"> apply</a>}
    </Card>)
 })} 
 </div>
  
 </Layout>)
}


 