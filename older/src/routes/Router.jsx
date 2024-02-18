import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ROUTES from "./ROUTES";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";
import AboutUsPage from "../pages/AboutMePage/AboutMe";
import EditCardPage from "../pages/EditCardPage/EditCardPage";
import ProfilePage from "../pages/ProfilePage";
import AuthGuard from "../guard/AuthGuard";
import BizGuard from "../guard/BizGuard";
import Welcome from "../pages/WelcomePage/Welcome";
import EditUser from "../pages/EditUser/EditUser";
import CreateCardPage from "../pages/CreateCardPage/CreateCardPage";
import MyCards from "../pages/MyCards";
const Router = () => {
  return (
    <Routes>
       <Route path={ROUTES.start} element={<Welcome/>} />
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutUsPage/>} />
      <Route path={ROUTES.EditUser} element={<EditUser/>} />
      <Route path={`${ROUTES.EDITCARD}/:id`} element={<EditCardPage/>} />  
      <Route path={ROUTES.CREATECARD} element={<CreateCardPage/>} />  
      <Route path={ROUTES.MyCards} element={<MyCards/>} /> 
      



      <Route path="/profile" element={ <AuthGuard> <ProfilePage /> </AuthGuard> }  />
  
      
    
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default Router;
