// FooterComponent
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CoffeeIcon from "@mui/icons-material/Coffee";
import DiamondIcon from "@mui/icons-material/Diamond";
import ROUTES from "../../routes/ROUTES";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../hooks/context/loginContext";
import { useContext } from "react";
import Navigation from "./Navigation";

const FooterComponent = () => {
  const navigate =useNavigate();
  const   {login,setlogin} =useContext(LoginContext)

function handleMove (where){
  navigate (where);
}

function logOut (){
  setlogin(null)
  handleMove(ROUTES.ABOUT);
  



}


  return (
    <Paper elevation={4} sx={{ position: "sticky", mt: 2 }}>
      <BottomNavigation showLabels>
      

    <BottomNavigationAction onClick={()=>{handleMove(ROUTES.start);}} label="home" icon={<AcUnitIcon />} />
    <BottomNavigationAction onClick={()=>{handleMove(ROUTES.ABOUT);}}label="aboutMe" icon={<AcUnitIcon />} />



     
      </BottomNavigation>
    </Paper>
  );
};

export default FooterComponent;
