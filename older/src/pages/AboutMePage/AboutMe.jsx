import { Fragment, useContext } from "react";
import Typography from "@mui/material/Typography";
import LoginContext from "../../hooks/context/loginContext";
import { Height, Login } from "@mui/icons-material";
import ariel from './ariel.jpg'

const AboutUsPage = () => {
  const {login,setLogin} =useContext(LoginContext)




  return (
    <Fragment>
      <Typography variant="h1">About me- ariel astangelov</Typography>
      <Typography >hellow and welcom to my website,this is my biz website which ,let buisnnsess register their own cards in order to promot themself   </Typography>
      

      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img style={{height:'250px'}} src={ariel} alt="Woods Image" />
    </div>



    </Fragment>

    
  );
};

export default AboutUsPage;
