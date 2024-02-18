import { useState,useEffect } from "react";
import axios from "axios";
import Cardi from "../../components/Cardi";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../hooks/context/loginContext";
import { useContext } from "react";
import ROUTES from "../../routes/ROUTES";
import { toast } from "react-toastify";
import normilizeFavorite from './normilizeFavorite'



export function FavoritePage (){
   const [dataFromServer, setDataFromServer] = useState([]);
   const navigate = useNavigate();
   const { login } = useContext(LoginContext);





   useEffect(() => {
      axios
        .get("/cards/my-cards")
        .then(({ data }) => {
          setDataFromServer(data)
          console.log(dataFromServer);
         
      
        })
        .catch((err) => {
          console.log("error from axios", err);
        });
    }, [])

  
   




    const handleEditCard = (id) => {
    
      navigate(`${ROUTES.EDITCARD}/${id}`);
    };


    const handleLikeCard = async (id) => {
      try {
        let { data } = await axios.patch("/cards/" + id);
       
        setDataFromServer((cDataFromServer) => {
          let cardIndex = cDataFromServer.findIndex((card) => card._id === id);
          if (cardIndex >= 0) {
            cDataFromServer[cardIndex] = data;
          }
  
  
          return [...cDataFromServer]; 
  
  
        });
      } catch (err) {
        console.log(err);
  
      }
    };


    const handleDeleteCard = async (id) => {
 

      try {
      let response =  await  axios.delete(`/cards/${id}`,{header:{ 
       'x-auth-token':`${localStorage.getItem('token')}`
  
       
  
      }})
      console.log(response)
      setDataFromServer((currentDataFromServer) =>
      currentDataFromServer.filter((card) => card._id !== id))
      toast.success("deleted from server ", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        });
  
        
      } catch (error) {
          console.log(error);
        toast.error(' this is not your card ,you cant delete it   ', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
  
  
      }
  
  
    };

 return(<>


<Grid container spacing={1}>
      {dataFromServer.map((item, index) => (
        <Grid item lg={3} md={6} xs={12} key={"carsCard" + index}>
          <Cardi
            id={item._id}
            title={item.title}
            subtitle={item.subtitle}
            img={item.image.url}
            phone={item.phone}
            address={item.address}
            cardNumber={item.bizNumber}
            liked={item.liked}
            onEdit={handleEditCard}
            onLike={handleLikeCard}
            onDelete={handleDeleteCard}


          
          />
        </Grid>
      ))}
    </Grid>

 
 
 </>)

}


export default FavoritePage;