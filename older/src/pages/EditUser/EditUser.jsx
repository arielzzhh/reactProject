import { Grid,TextField, Typography,Button, FormControlLabel,Box} from "@mui/material";
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import  normilizeEditUser from './normilizeEditUser'
import validateEditUserSchema from'../../validation/editUserValidation'
import axios from "axios";
import LoginContext from "../../hooks/context/loginContext";





export function EditUser (){


  const {login, setLogin} = useContext(LoginContext);

    const [inputsValue, setInputsValue] = useState({
        first: "",
        last: "",
        url:"",
        alt:"",
        state:"",
        country: "",
        city: "",
        street:"",
        houseNumber:"",
        zip:"",
      });


      const handleInputsChange = (e) => {
        setInputsValue((CopyOfCurrentValue) => (  {
          ...CopyOfCurrentValue,
          [e.target.id]: e.target.value,
        } )); 
   
      };

      
         



      async function submit (e){
        e.preventDefault();
        try {    
       
       await axios.put (`/users/${login._id}`, normilizeEditUser(inputsValue))
         console.log('edited')
            
        } catch (error) {
          console.log(error)
        }


      }

  



return(
  <Box component="form" onSubmit={submit} >
    <Grid container spacing={1} >





        <Grid item xs={12}> <Typography variant="h1" color="initial">Edit user </Typography></Grid>


        <Grid item xs={6}><TextField onChange={handleInputsChange} fullWidth required  label="First name"id="first"  name="first"></TextField></Grid>
        <Grid item xs={6}><TextField onChange={handleInputsChange} fullWidth required label="last name" id="last"  name="last"></TextField></Grid>
        <Grid item xs={6}><TextField onChange={handleInputsChange} fullWidth required label="phone" id="phone"  name="phone"></TextField></Grid>
        <Grid item xs={6}><TextField onChange={handleInputsChange} fullWidth required  label="url"id="url"  name="url"></TextField></Grid>
        <Grid item xs={6}><TextField onChange={handleInputsChange} fullWidth required label="alt" id="alt"  name="alt"></TextField></Grid>
        <Grid item xs={6}><TextField onChange={handleInputsChange} fullWidth required label="state" id="state"  name="state"></TextField></Grid>
        <Grid item xs={6}><TextField onChange={handleInputsChange} fullWidth required label="country" id="country"  name="country"></TextField></Grid>
        <Grid item xs={6}><TextField onChange={handleInputsChange} fullWidth required  label="city"id="city"  name="city"></TextField></Grid>
        <Grid item xs={6}><TextField onChange={handleInputsChange} fullWidth required label="street" id="street"  name="street"></TextField></Grid>
        <Grid item xs={6}><TextField onChange={handleInputsChange} fullWidth required label="houseNumber" id="houseNumber"  name="houseNumber"></TextField></Grid>
        <Grid item xs={12}><TextField onChange={handleInputsChange}  fullWidth required label="zip" id="zip"  name="zip"></TextField></Grid>


        <Grid item xs={12} >  
        <Button type="submit" fullWidth variant="contained">sign up
        </Button>  </Grid> </Grid>
        </Box>




   







)

}


export default EditUser ;