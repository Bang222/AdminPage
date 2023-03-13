import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllIdeas} from "../../../redux/Apirequest";
import {createAxios} from "../../../createInstance";
import {loginSuccess} from "../../../redux/authSlice";

const HomepageAdmin = () => {
    const user = useSelector((state) => state.auth.login?.currentUser)
    const getAllIdea = useSelector((state) => state.listIdeas.ideas?.allIdeas)
    const dispatch = useDispatch()
    let axiosJWT = createAxios(user, dispatch, loginSuccess)
    useEffect(()=>{
        if(user.accessToken) {
            getAllIdeas(user?.accessToken, dispatch, axiosJWT, 1)
        }
    },[])
    console.log("check admin",getAllIdea)
    return(
        <><div>admin</div> </>
    )
}
export default HomepageAdmin