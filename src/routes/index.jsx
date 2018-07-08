import User from "layouts/User/User.jsx";
import Login from "views/login/login.js";

var indexRoutes = [{ path: "/", name: "Home", component: User },
{path:"/user",name:"Coordinador", component:User}];

export default indexRoutes;
