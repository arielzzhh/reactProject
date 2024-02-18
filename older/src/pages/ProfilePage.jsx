import { useEffect ,useContext, useState} from "react";
import LoginContext from "../hooks/context/loginContext";
import axios from "axios";
import { Grid,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
let first ;
let last ;
let three;
let four;
let five;
let six;
let seven;
let image;

const ProfilePage = () => {
  const { login, setLogin } = useContext(LoginContext);
 


  let navigate =useNavigate();



useEffect(()=>{
   axios.get (`/users/${login._id}`)

   .then(response => {
     first = response.data.name.first;
     last = response.data.name.last;
     three = response.data.email;
     four = response.data.phone;
     five = response.data.address.state;
     six = response.data.address.street;
     seven = response.data._id;
     image = response.data.image.url
    console.log(image)
  })
  .catch(error => {
    console.log(error)

  });








},[]


)






 



  




  return(<div style={{display:'flex' }}> 
    <img src={image} style={{width:'100%', height:'45vh'}}></img>
    <Grid container style={{width:'100%' ,height:'45vh'}}>
      <Grid item xs={6}>firstName</Grid> <Grid item xs={6}>{first}</Grid>
      <Grid item xs={6}>lastname</Grid>  <Grid item xs={6}>{last}</Grid>
      <Grid item xs={6}>email</Grid>     <Grid item xs={6}>{three}</Grid>
      <Grid item xs={6}>phone</Grid>     <Grid item xs={6}>{four}</Grid>
      <Grid item xs={6}>state</Grid>      <Grid item xs={6}>{five}</Grid>
      <Grid item xs={6}>street</Grid>      <Grid item xs={6}>{six}</Grid>
      <Grid item xs={6}>Id</Grid>      <Grid item xs={6}>{seven}</Grid>

      <Button onClick={()=>{
      navigate(ROUTES.EditUser)

      }} style={{width:'100%'}} xs={12}>edit User</Button>    


  
    </Grid>
    


  </div>)




};

export default ProfilePage;
