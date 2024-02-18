import { useEffect,useState } from "react"
import axios from "axios"
import Cardi from "../components/Cardi"

export function MyCards (){
    const [myCards, setMyCards] = useState([]);


    useEffect(
      console.log('ariel')
      ,)






     
    return (
        <>
        
        <Cardi
         title="dasdasd"
         subtitle="dsadasd"
         img="sadsad"
         phone="sadsad"
         address="asdsad"
         cardNumber="dasdsad"
         id="dsad"
         liked=""
         onDelete=""
         onEdit=""
         onLike=""

        
        ></Cardi>





        </>








      );
             
       





}
     
        export default MyCards;


