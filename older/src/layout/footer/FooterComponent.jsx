// FooterComponent
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CoffeeIcon from "@mui/icons-material/Coffee";
import DiamondIcon from "@mui/icons-material/Diamond";
import Links from "./ui/Links";
import FooterIcon from "../../components/FooterIcon";
import ROUTES from "../../routes/ROUTES";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <Paper elevation={4} sx={{ position: "sticky", mt: 2 }}>
      <BottomNavigation showLabels>


      <Link>  <BottomNavigationAction label="aboutMe" icon={<AcUnitIcon />} /></Link>
   
      </BottomNavigation>
    </Paper>
  );
};

export default FooterComponent;
