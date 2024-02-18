import { useState,useNavigate,useEffect } from "react";
import { Grid,TextField,Button,Box } from "@mui/material";
import axios from "axios";
import  normalizeCreateCard from './normalizeCreateCard.js'
import ROUTES from "../../routes/ROUTES.js";
import { toast } from "react-toastify";


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
        <Grid item xs={6}><TextField   onChange={handleInputsChange}   fullWidth required  label="title" id="title"  name="title"></TextField></Grid>
        <Grid item xs={6}><TextField onChange={handleInputsChange}  fullWidth required label="subtitle" id="subtitle"  name="subtitle"></TextField></Grid>
        <Grid item xs={6}><TextField onChange={handleInputsChange}  fullWidth required label="description" id="description"  name="description"></TextField></Grid>
        <Grid item xs={6}><TextField  onChange={handleInputsChange}  fullWidth required  label="phone"id="phone"  name="phone"></TextField></Grid>
        <Grid item xs={6}><TextField  onChange={handleInputsChange} fullWidth required label="email" id="email"  name="email"></TextField></Grid>
        <Grid item xs={6}><TextField  onChange={handleInputsChange} fullWidth required label="web" id="web"  name="web"></TextField></Grid>
        <Grid item xs={6}><TextField  onChange={handleInputsChange} fullWidth required label="url" id="url"  name="url"></TextField></Grid>
        <Grid item xs={6}><TextField  onChange={handleInputsChange} fullWidth required  label="alt"id="alt"  name="alt"></TextField></Grid>
        <Grid item xs={6}><TextField  onChange={handleInputsChange} fullWidth required label="state" id="state"  name="state"></TextField></Grid>
        <Grid item xs={6}><TextField  onChange={handleInputsChange} fullWidth required label="country" id="country"  name="country"></TextField></Grid>
        <Grid item xs={6}><TextField  onChange={handleInputsChange} fullWidth required label="city" id="city"  name="city"></TextField></Grid>
        <Grid item xs={6}><TextField  onChange={handleInputsChange} fullWidth required label="street" id="street"  name="street"></TextField></Grid>

        <Grid item xs={6}><TextField  onChange={handleInputsChange} fullWidth required label="houseNumber" id="houseNumber"  name="houseNumber"></TextField></Grid>
        <Grid item xs={12}><TextField  onChange={handleInputsChange} fullWidth required label="zip" id="zip"  name="zip"></TextField></Grid>

        </Grid>
        <Button type="submit" fullWidth variant="contained"> create new card  </Button>
        </Box>
    )


}


export default CreateCardPage