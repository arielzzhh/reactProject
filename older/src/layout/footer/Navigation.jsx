import { BottomNavigationAction } from "@mui/material";
export function Navigation ({onclick,label,icon}){

    return(<>

       <BottomNavigationAction onclick={onclick} label={label} icon={icon}  />

    </>)
}


export default Navigation;