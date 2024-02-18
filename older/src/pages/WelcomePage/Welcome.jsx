import { Typography } from "@mui/material";
import a from './a.jpg'





export function Welcome (){

return (<>

<Typography textAlign={'center'} variant='h4'>hellow and welcome to ariel-Bz </Typography>
<p>  hello and wlecome to my react project ,this website provide a great way for buiznnesses that want to to 


i used a bunch of addones so dont forget to 
install - in your terminal 

in this website you can register and login 
you have a dynamic header which will show you only the option that are relivent to you 
you also have a footer and layout 

when registerd you can upload buizssness cards  

later you can  go to the b-card tab ,and updated the card as you wish also delete them and like them 
</p>


<div style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={a} alt="Woods Image" />
    </div>






</>)

}


export default Welcome ;