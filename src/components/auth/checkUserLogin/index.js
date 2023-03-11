import {useSelector} from "react-redux";
import Home from "../checkRoles";
import {Navigate} from "react-router-dom";

const Index = () => {
    const auth = useSelector((state) => state.auth.login?.currentUser);
    return(
        <>
            {auth ? <Home/> :<Navigate to={"/"}/>}
        </>
    )
}
export default Index