import { Route } from "react-router-dom";

const ProtectedRoutes = ({ isAuth, component: Component }) => {
  return (
    <>
      {isAuth ? <div> Protected true</div> : <div> Protected false </div>}
    </>
  );
  // <Route/>
};

export default ProtectedRoutes;
