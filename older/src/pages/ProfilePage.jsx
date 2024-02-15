import { useEffect ,useContext} from "react";
import LoginContext from "../hooks/context/loginContext";
import axios from "axios";




const ProfilePage = () => {
  const { login, setLogin } = useContext(LoginContext);
  const adminHeader = {
    'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBhZTc1OWRiMzgxM2E2NTAyZmMyZmMiLCJpc0J1c2luZXNzIjp0cnVlLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTg4NDI5NTJ9.En62ry5Gu9FMBAvxyltv0eRYhpJIJs_aW06QAtxXRck'
  };




 async function returnObject (){

  try {
    let response = await axios.get(`/users/${login._id}`,{headers: adminHeader })
         return response.data.name.first;

     

  }

  catch(error){
    console.log(error)

  }


 }
 



  




  return(<div style={{backgroundColor:'red',display:'flex' }}>
    <img style={{width:'50%', height:'45vh'}}></img>
    <div style={{width:'50%' ,height:'45vh'}}>


    </div>
    


  </div>)




};

export default ProfilePage;
