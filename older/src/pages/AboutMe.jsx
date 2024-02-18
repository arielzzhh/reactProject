import { Fragment, useContext } from "react";
import Typography from "@mui/material/Typography";
import LoginContext from "../hooks/context/loginContext";
import { Login } from "@mui/icons-material";

const AboutUsPage = () => {
  const {login,setLogin} =useContext(LoginContext)




  return (
    <Fragment>
      <Typography variant="h1">About me- ariel astangelov</Typography>
      {console.log(login)}
      <Typography >hllo my name and this is my bizz-bcards website here you could sign up and then sign with  </Typography>
    </Fragment>

    
  );
};

export default AboutUsPage;
