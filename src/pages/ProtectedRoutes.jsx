import { Route } from "react-router-dom";
import LoggedIn from "./LoggedIn";
import NotLoggedIn from "./NotLoggedIn";

const ProtectedRoutes = ({ isAuth, component: Component, name }) => {
  return (
    <>
      {isAuth ? <LoggedIn name={name}/> : <NotLoggedIn/>}
    </>
  );
  // <Route/>
};

export default ProtectedRoutes;
