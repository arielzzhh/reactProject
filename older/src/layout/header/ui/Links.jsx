import { Box } from "@mui/material";
import { visitor, logedIn, loggedOut, biz} from "../../myLinks";  //importing objects of links 
import NavLinkComponent from "../NavLinkComponent";
import { useContext } from "react";
import LoginContext from "../../../hooks/context/loginContext";


const Links = () => {
  const { login } = useContext(LoginContext);     //depnded on the user login status depnded on if there data from server 
  
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {visitor.map((myItem, index) => (
        <NavLinkComponent to={myItem.to} key={"linksnav" + index}>
          {myItem.children}
        </NavLinkComponent>
       
      ))}
       
      {login&& 
        logedIn.map((myItem, index) => (
          <NavLinkComponent to={myItem.to} key={"linksnav2" + index}>
            {myItem.children}
          </NavLinkComponent>
        ))}
      {login &&
        login.isBusiness &&
        biz.map((myItem, index) => (
          <NavLinkComponent to={myItem.to} key={"linksnav2" + index}>
            {myItem.children}
          </NavLinkComponent>
        ))}
      {!login &&
        loggedOut.map((myItem, index) => (
          <NavLinkComponent to={myItem.to} key={"linksnav3" + index}>
            {myItem.children}
          </NavLinkComponent>
        ))}
    </Box>
  );
};

export default Links;
