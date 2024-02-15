import ROUTES from "../routes/ROUTES";

//which is depnded on which 


const always = [
  { to: ROUTES.HOME, children: "Home page" },
  { to: ROUTES.ABOUT, children: "About Us page" },
];
const logedIn = [{ to: "/profile", children: "Profile page" }];

const loggedOut = [
  { to: ROUTES.REGISTER, children: "Register page" },
  { to: ROUTES.LOGIN, children: "Login page" },
];

const biz = [{ to: ROUTES.CREATECARD, children: "Create page" }];

export { always, logedIn, loggedOut, biz };
