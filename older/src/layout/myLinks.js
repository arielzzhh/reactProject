import ROUTES from "../routes/ROUTES";




const visitor = [ { to: ROUTES.ABOUT, children: "About me" },];
const logedIn = [{ to: "/profile", children: "Profile" },{ to: ROUTES.HOME, children: "B-cards" },];

const loggedOut = [{ to: ROUTES.REGISTER, children: "Register page" },{ to: ROUTES.LOGIN, children: "Login page" },];

const biz = [{ to: ROUTES.CREATECARD, children: "createCard" },{ to: ROUTES.MyCards, children: "myCards" }];

const admin = [{to: ROUTES.CREATECARD, children: "adminCard" }]

export { visitor, logedIn, loggedOut, biz,admin};
