import { useEffect, useState, useContext } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { Box, Avatar, Typography, Grid, Button } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import TextInputComponent from "../../components/TextInputComponent";
import validateSchema from "../../validation/cardValidation";
import LoginContext from "../../hooks/context/loginContext";
import { fromServer } from "./normalizeEdit";
import ROUTES from "../../routes/ROUTES";
import { toast } from "react-toastify";

const EditCardPage = () => {

    const navigate =useNavigate();

  const [inputsValue, setInputsValue] = useState({
    title: "",
    subTitle: "",
    description: "",
    phone: "",
    email: "",
    web: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    subTitle: "",
    description: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
  });
  let { id } = useParams(); 
  const { login } = useContext(LoginContext);
 
  useEffect(() => {
    if (!id || !login) {
      return;
    }
    axios
      .get("/cards/" + id)
      .then(({ data }) => {
        if (data.user_id == login._id) {
        

         } else {

          navigate(ROUTES.HOME)

          toast.error('this is not your card', {
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
       
        setInputsValue(fromServer(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, login]);
  let keysArray = Object.keys(inputsValue); 
  const handleInputsChange = (e) => {
    setInputsValue((cInputsValue) => ({
      ...cInputsValue,
      [e.target.id]: e.target.value,
    }));
  };


  async function Submit (){   




  }






  return (
    <Box  component="form" onSubmit={Submit} noValidate
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Edit your card
      </Typography>
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {keysArray.map((keyName) => (
            <TextInputComponent
              key={"inputs" + keyName}
              id={keyName}
              label={keyName}
              value={inputsValue[keyName]}
              onChange={handleInputsChange}
              errors={errors[keyName]}
            />
          ))}
        </Grid>
      </Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Edit Your Card 
      </Button>
    </Box>
  );
};
export default EditCardPage;
