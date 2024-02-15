import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Button, CssBaseline, TextField, FormControlLabel,Checkbox, Paper, Box, Grid, Typography, Alert,} from "@mui/material";  //mui library 
import ROUTES from "../../routes/ROUTES";
import axios from "axios";
import LoginContext from "../../hooks/context/loginContext";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import validateLogin, {validateEmailLogin,validatePasswordLogin,} from "../../validation/loginValidation";

const LoginPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const { setLogin } = useContext(LoginContext);
  let currentUser;
  let response 

   const adminHeader = {
    'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBhZTc1OWRiMzgxM2E2NTAyZmMyZmMiLCJpc0J1c2luZXNzIjp0cnVlLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTg4NDI5NTJ9.En62ry5Gu9FMBAvxyltv0eRYhpJIJs_aW06QAtxXRck'
  };

  const handleEmailChange = (e) => {

    setEmailValue(e.target.value);
  };
  const handlePasswordChange = (e) => {
  
    setPasswordValue(e.target.value);
  };



  async function  returnAllInformation(){



    try {
      response = await axios.get("/users",{headers: adminHeader })
      let userData = response.data; 

   

      
    } catch (error) {

   
       console.log('ariel'+error)
      
    }
   

    }


  
    




  const handleSubmit = async (e) => {
    e.preventDefault();

 
    try {
      
       let {data}  = await axios.post("/users/login", {
        email: emailValue,
        password: passwordValue,
        
      });
      
      localStorage.setItem("token", data);
       currentUser = jwtDecode(data); 
      setLogin(currentUser);


      
      toast.success("🦄 LoggedIn Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate(ROUTES.HOME);
    } catch (err) {
      setLogin(null);
      localStorage.clear();
      
      
    }
  };
  const handleEmailBlur = () => {
    let dataFromJoi = validateEmailLogin({ email: emailValue });
    if (dataFromJoi.error) {
      setEmailError(dataFromJoi.error.details[0].message);
    } else {
      setEmailError("");
    }
  };
  const handlePasswordBlur = () => {
    let dataFromJoi = validatePasswordLogin({ password: passwordValue });
    if (dataFromJoi.error) {
      setPasswordError(dataFromJoi.error.details[0].message);
    } else {
      setPasswordError("");
    }
  };





 
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
        {console.log(returnAllInformation())}
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"  ? t.palette.grey[50]   : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
        
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={emailValue}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
            />
            {emailError && <Alert severity="error">{emailError}</Alert>}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={passwordValue}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
            />
            {passwordError && <Alert severity="error">{passwordError}</Alert>}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button 

              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={emailError || passwordError}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to={ROUTES.REGISTER}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
           
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default LoginPage;
