import { useEffect ,useContext, useState} from "react";
import LoginContext from "../hooks/context/loginContext";
import axios from "axios";
import { Grid,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import { Token, Try } from "@mui/icons-material";
import { toast } from "react-toastify";


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
  const [image, setImage] = useState('');
 


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
     const imageData = response.data.image.url;
      setImage(imageData);
  })
  .catch(error => {
    console.log(error)

  });








},[]


)




async function deleteUser  (){


  try {

   await axios.delete(`/users/${login._id}`,{
    headers: {
      'x-auth-token': localStorage.getItem('token'), 


  
    }} )
console.log('deleted')

toast.success('card got deleted', {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  });

    
  } catch (error) {
    console.log(error)
    toast.error('there was some kind of problem', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });


    
  }


}






 



  




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

      <Button onClick={()=>{ navigate(ROUTES.EditUser) }} style={{width:'50%'}} xs={12}>edit User</Button>    
      <Button onClick={()=>{
       deleteUser();
       navigate(ROUTES.ABOUT);


      }}  style={{width:'50%'}} xs={12}>Delete user</Button>    



  
    </Grid>
    


  </div>)




};

export default ProfilePage;
