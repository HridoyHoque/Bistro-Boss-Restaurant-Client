import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const AdminHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="w-full m-4">
          <h2 className="text-3xl">Welcome Back, {user.displayName}</h2>  
        </div>
    );
};

export default AdminHome;