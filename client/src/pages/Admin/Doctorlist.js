import { Button, Input, Modal,Form } from 'antd'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

import DoctorTable from '../../components/Table'

function Doctors() {
  const nameref =useRef()
  const departmentref = useRef()
  const designationref = useRef()
  const[doctors,setDoctors] = useState([])
  const [isModalOpen,setModal] = useState()
  useEffect(()=>{
const fetchDoctors =async()=>{
  const {data} = await axios.get("/api/user/list",{   headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },})
  if(data) setDoctors(data)

}
fetchDoctors()
  },[])
  const handlesubmit =async()=>{
   const {data}= await axios.post("/api/admin/create",{name:nameref.current.value,department:departmentref.current.value,designation:designationref.current.value},{
   headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  }})
if(data) setDoctors([...doctors,data])
  }
  const handleCancel = () => {
    setModal(false);
  };
 
  return (
    <div>
      <Button onClick={()=>setModal(true)}>Add Doctor</Button>
       <Modal footer={[
          <Button key="back" onClick={handlesubmit}>
           Submit
          </Button>]} 
          title="Add Doctor" open={isModalOpen}  onCancel={handleCancel}>
       <Form >
         <input  ref={nameref} name='name' placeholder='name'/>
              <input ref={departmentref} name='department' placeholder='department'/>
              <input ref={designationref} name='designation' placeholder='designation'/>
              
       </Form>
      </Modal>
   
    <DoctorTable admin data={doctors  } />
    </div>
  )
}

export default Doctors