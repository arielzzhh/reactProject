import { useState,useNavigate,useEffect } from "react";
import { Grid,TextField,Button,Box,Alert } from "@mui/material";
import axios from "axios";
import  normalizeCreateCard from './normalizeCreateCard.js'
import ROUTES from "../../routes/ROUTES.js";
import { toast } from "react-toastify";
import validateCreateCardSchema from '../../validation/createCardValidation.js'


export function CreateCardPage (){

  const navigate = useNavigate;

    const [inputsValue, setInputsValue] = useState({
        title: "",
        subtitle: "",
        description: "",
        phone:"",
        email:"",
        web:"",
        url: "",
        alt: "",
        state:"",
        country:"",
        city:"",
        street:"",
        houseNumber:"",
        zip:"",
      });
      const [errors, setErrors] = useState({
        title: "",
        subtitle: "",
        description: "",
        phone:"",
        email:"",
        web:"",
        url: "",
        alt: "",
        state:"",
        country:"",
        city:"",
        street:"",
        houseNumber:"",
        zip:"",
      });


      const handleInputsBlur = (e) => {
   
        let dataFromJoi = validateCreateCardSchema[e.target.id]({
          [e.target.id]: inputsValue[e.target.id],
    
    
        });
      
        console.log("dataFromJoi", dataFromJoi);
        if (dataFromJoi.error) {
          setErrors((copyOfErrors) => ({
            ...copyOfErrors,
            [e.target.id]: dataFromJoi.error.details[0].message,
          }));
        } else {
          setErrors((copyOfErrors) => {
            delete copyOfErrors[e.target.id];
            return { ...copyOfErrors };
          });
        }
     
      };
    


    





      useEffect(
        ()=>{
          returnallCards ()
        }
        
        ,[])


        async function returnallCards (){
           await axios.get('/cards')
           .then((response)=>{console.log(response)})
           .catch((error)=>{console.log(error)})
        }



      const handleInputsChange = (e) => {
        setInputsValue((CopyOfCurrentValue) => (  {
          ...CopyOfCurrentValue,
          [e.target.id]: e.target.value,
          
              

        }
    ));
      };


      const  submit =async (e) =>{
        e.preventDefault();

       try {

        console.log(normalizeCreateCard(inputsValue)) 



        await axios.post('/cards',normalizeCreateCard(inputsValue))

        navigate(ROUTES.HOME)

        toast.success('card was created ', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

        

        
     

        
       } catch (error) {
        toast.error('error from server ', {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

          console.log(error)



        
       }






      }





    return(
  <Box component="form" onSubmit={submit} >
  <Grid container spacing={1}>
        <Grid item xs={6}><TextField  onBlur={handleInputsBlur}  onChange={handleInputsChange}   fullWidth required  label="title" id="title"  name="title"></TextField></Grid>              {errors.title && <Alert severity="error">{errors.title}</Alert>}

        <Grid item xs={6}><TextField onBlur={handleInputsBlur} onChange={handleInputsChange}  fullWidth required label="subtitle" id="subtitle"  name="subtitle"></TextField></Grid>                   {errors.subtitle && <Alert severity="error">{errors.subtitle}</Alert>}
        <Grid item xs={6}><TextField onBlur={handleInputsBlur} onChange={handleInputsChange}  fullWidth required label="description" id="description"  name="description"></TextField></Grid>                 {errors.description && <Alert severity="error">{errors.description}</Alert>}
        <Grid item xs={6}><TextField  onBlur={handleInputsBlur} onChange={handleInputsChange}  fullWidth required  label="phone"id="phone"  name="phone"></TextField></Grid>                            {errors.phone && <Alert severity="error">{errors.phone}</Alert>}
        <Grid item xs={6}><TextField  onBlur={handleInputsBlur} onChange={handleInputsChange} fullWidth required label="email" id="email"  name="email"></TextField></Grid>                           {errors.email && <Alert severity="error">{errors.email}</Alert>}
        <Grid item xs={6}><TextField  onBlur={handleInputsBlur} onChange={handleInputsChange} fullWidth required label="web" id="web"  name="web"></TextField></Grid>                                   {errors.web && <Alert severity="error">{errors.web}</Alert>}
        <Grid item xs={6}><TextField  onBlur={handleInputsBlur} onChange={handleInputsChange} fullWidth required label="url" id="url"  name="url"></TextField></Grid>                                 {errors.url && <Alert severity="error">{errors.url}</Alert>}
        <Grid item xs={6}><TextField  onBlur={handleInputsBlur} onChange={handleInputsChange} fullWidth required  label="alt"id="alt"  name="alt"></TextField></Grid>                                 {errors.alt && <Alert severity="error">{errors.alt}</Alert>}
        <Grid item xs={6}><TextField  onBlur={handleInputsBlur} onChange={handleInputsChange} fullWidth required label="state" id="state"  name="state"></TextField></Grid>                                    {errors.state && <Alert severity="error">{errors.state}</Alert>}
        <Grid item xs={6}><TextField  onBlur={handleInputsBlur} onChange={handleInputsChange} fullWidth required label="country" id="country"  name="country"></TextField></Grid>                                 {errors.country && <Alert severity="error">{errors.country}</Alert>}
        <Grid item xs={6}><TextField  onBlur={handleInputsBlur} onChange={handleInputsChange} fullWidth required label="city" id="city"  name="city"></TextField></Grid>                                         {errors.city && <Alert severity="error">{errors.city}</Alert>}
        <Grid item xs={6}><TextField  onBlur={handleInputsBlur} onChange={handleInputsChange} fullWidth required label="street" id="street"  name="street"></TextField></Grid>                                   {errors.street && <Alert severity="error">{errors.street}</Alert>}
        <Grid item xs={6}><TextField onBlur={handleInputsBlur}  onChange={handleInputsChange} fullWidth required label="houseNumber" id="houseNumber"  name="houseNumber"></TextField></Grid>                                                {errors.houseNumber && <Alert severity="error">{errors.houseNumber}</Alert>}
        <Grid item xs={12}><TextField onBlur={handleInputsBlur}  onChange={handleInputsChange} fullWidth required label="zip" id="zip"  name="zip"></TextField></Grid>                                                           {errors.zip && <Alert severity="error">{errors.zip}</Alert>}

        </Grid>
        <Button type="submit" fullWidth variant="contained"> create new card  </Button>
        </Box>
    )


}


export default CreateCardPage