import ROUTES from "../routes/ROUTES";



const VistiorFooter =[{ to: ROUTES.ABOUT, children: "About me" },{ to: ROUTES.ABOUT, children: "About me" },{ to: ROUTES.ABOUT, children: "About me" },]
const loginFooter =[{ to: ROUTES.ABOUT, children: "About me" },{ to: ROUTES.ABOUT, children: "About me" },{ to: ROUTES.ABOUT, children: "About me" },]
const bizFooter = [{ to: ROUTES.ABOUT, children: "About me" },{ to: ROUTES.ABOUT, children: "About me" },{ to: ROUTES.ABOUT, children: "About me" },]
const AdminFooter =[{ to: ROUTES.ABOUT, children: "About me" },{ to: ROUTES.ABOUT, children: "About me" },{ to: ROUTES.ABOUT, children: "About me" }, ]









const visitor = [ { to: ROUTES.ABOUT, children: "About me" },];
const logedIn = [{ to: "/profile", children: "Profile" },{ to: ROUTES.HOME, children: "B-cards" },];

const loggedOut = [{ to: ROUTES.REGISTER, children: "Register page" },{ to: ROUTES.LOGIN, children: "Login page" },];

const biz = [{ to: ROUTES.CREATECARD, children: "createCard" }];

export { visitor, logedIn, loggedOut, biz,VistiorFooter,loginFooter ,bizFooter,AdminFooter};
