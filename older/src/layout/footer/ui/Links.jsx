import LoginContext from "../../../hooks/context/loginContext";
import { useContext } from "react";
import { BottomNavigationAction, Box } from "@mui/material";
import { VistiorFooter,loginFooter,bizFooter,AdminFooter } from "../../myLinks";

export function Links (){
    const { login } = useContext(LoginContext);  


return(<>
  <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>

    
      {VistiorFooter.map((myItem, index) => (
        <BottomNavigationAction label="Icebook" to={myItem.to} key={"linksnav" + index} >
          {myItem.children}
        </BottomNavigationAction>
       
      ))}

















  </Box>
</>)

}



export default Links