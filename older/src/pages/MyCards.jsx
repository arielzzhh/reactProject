import { useEffect,useState } from "react"
import axios from "axios"
import Cardi from "../components/Cardi"

export function MyCards (){
    const [myCards, setMyCards] = useState([]);


  
    useEffect(() => {
        async function fetchMyCards() {
          try {
            const response = await axios.get('/cards/my-cards');
            setMyCards(response.data);
          } catch (error) {
            console.error('Error fetching my cards:', error);
    }}})
    
    return (
        <>
        

        <Cardi
         title=""
         subtitle=""
         img=""
         phone=""
         address=""
         cardNumber=""
         id=""
         liked=""
         onDelete=""
         onEdit=""
         onLike=""

        
        
        
        
        
        ></Cardi>





        </>








      );
             
       



}

  
     
        export default MyCards;


