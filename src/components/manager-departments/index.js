import {Navigate, Outlet} from "react-router-dom";
import Layout from "../Layout";
import jwt_decode from "jwt-decode";

const IndexManager = (props) => {
    const {auth, checkRoleAdmin} = props
    return (
            <>
                <title> HOME < /title>
                <section style={{display: "flex", justifyContent: "space-between"}}>
                    <header>
                        <Layout
                            auth={auth}
                            checkRoleAdmin={checkRoleAdmin}/>
                    </header>
                    <div className={"w-full h-full"}>
                        <div className={"body-content"}>
                            <Outlet/>
                        </div>
                    </div>
                </section>
        </>
    )
}
export default IndexManager