import { Grid,TextField, Typography,Button, FormControlLabel,Box} from "@mui/material";
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import  normilizeEditUser from './normilizeEditUser'
import validateEditUserSchema from'../../validation/editUserValidation'
import axios from "axios";
import LoginContext from "../../hooks/context/loginContext";
import validateCardSchema from '../../validation/cardValidation'
import Alert from "@mui/material/Alert";






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


      const [errors, setErrors] = useState({
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

      const handleInputsBlur = (e) => {
   
        let dataFromJoi = validateCardSchema[e.target.id]({
          [e.target.id]: inputsValue[e.target.id],
    
    
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


        <Grid item xs={6}><TextField onBlur={handleInputsBlur} onChange={handleInputsChange} fullWidth required  label="First name"id="first"  name="first"></TextField></Grid>               {errors.first && <Alert severity="error">{errors.first}</Alert>}
        <Grid item xs={6}><TextField onBlur={handleInputsBlur} onChange={handleInputsChange} fullWidth required label="last name" id="last"  name="last"></TextField></Grid>                          {errors.last && <Alert severity="error">{errors.last}</Alert>}
        <Grid item xs={6}><TextField onBlur={handleInputsBlur} onChange={handleInputsChange} fullWidth required label="phone" id="phone"  name="phone"></TextField></Grid>                     {errors.phone && <Alert severity="error">{errors.phone}</Alert>}
        <Grid item xs={6}><TextField onBlur={handleInputsBlur} onChange={handleInputsChange} fullWidth required  label="url"id="url"  name="url"></TextField></Grid>                           {errors.url && <Alert severity="error">{errors.url}</Alert>}
        <Grid item xs={6}><TextField onBlur={handleInputsBlur} onChange={handleInputsChange} fullWidth required label="alt" id="alt"  name="alt"></TextField></Grid>                            {errors.alt && <Alert severity="error">{errors.alt}</Alert>}
        <Grid item xs={6}><TextField onBlur={handleInputsBlur} onChange={handleInputsChange} fullWidth required label="state" id="state"  name="state"></TextField></Grid>                        {errors.state && <Alert severity="error">{errors.state}</Alert>}
        <Grid item xs={6}><TextField onBlur={handleInputsBlur} onChange={handleInputsChange} fullWidth required label="country" id="country"  name="country"></TextField></Grid>                    {errors.country && <Alert severity="error">{errors.country}</Alert>}
        <Grid item xs={6}><TextField onBlur={handleInputsBlur} onChange={handleInputsChange} fullWidth required  label="city"id="city"  name="city"></TextField></Grid>                               {errors.city && <Alert severity="error">{errors.city}</Alert>}
        <Grid item xs={6}><TextField onBlur={handleInputsBlur} onChange={handleInputsChange} fullWidth required label="street" id="street"  name="street"></TextField></Grid>                        {errors.street && <Alert severity="error">{errors.street}</Alert>}
        <Grid item xs={6}><TextField onBlur={handleInputsBlur} onChange={handleInputsChange} fullWidth required label="houseNumber" id="houseNumber"  name="houseNumber"></TextField></Grid>            {errors.houseNumber && <Alert severity="error">{errors.houseNumber}</Alert>}
        <Grid item xs={12}><TextField onBlur={handleInputsBlur} onChange={handleInputsChange}  fullWidth required label="zip" id="zip"  name="zip"></TextField></Grid>                                  {errors.zip && <Alert severity="error">{errors.zip}</Alert>}


        <Grid item xs={12} >  
        <Button type="submit" fullWidth variant="contained">sign up
        </Button>  </Grid> </Grid>
        </Box>




   







)

}
}

export default EditUser ;