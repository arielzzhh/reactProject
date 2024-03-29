import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Cardi from "../../components/Cardi";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import normalizeHome from "./normalizeHome";
import LoginContext from "../../hooks/context/loginContext";
import { toast } from "react-toastify";


const HomePage = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);
  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        console.log(normalizeHome(data));
        setDataFromServer(normalizeHome(data));
      })
      .catch((err) => {
        console.log("error from axios", err);
      });
  }, []);
  const dataFromServerFiltered = normalizeHome(
    dataFromServer,
    login ? login._id : undefined
  );
  if (!dataFromServerFiltered || !dataFromServerFiltered.length) {
    return <Typography>not Found</Typography>;
  }
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

        console.log( data);

        return [...cDataFromServer]; 


      });
    } catch (err) {
      console.log(err);

    }
  };

  return (
    <Grid container spacing={1}>
      {dataFromServerFiltered.map((item, index) => (
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
            onDelete={handleDeleteCard}
            onEdit={handleEditCard}
            onLike={handleLikeCard}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;
