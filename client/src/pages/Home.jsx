import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Layout from "../components/Layout";
import {useSelector} from 'react-redux'
import Doctors from "./Admin/Doctorlist";

function Home() {
  const {user}=useSelector(state=>state.user)
  


  const getData = async () => {
    try {
      const response = await axios.post("/api/user/get-user-info-by-id",{}, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return <Layout>
 { user?.isAdmin ? <Doctors/>:  <><h1>Welcome</h1>
 </>}

  </Layout> 
}

export default Home;
