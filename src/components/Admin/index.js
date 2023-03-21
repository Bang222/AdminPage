import {Outlet} from "react-router-dom";
import Layout from "../Layout";
import "./loadingadmin.css"

const IndexAdmin = (props) => {
    const {auth,checkRoleAdmin} = props
    return(
        <>
            <section style={{display: "flex", justifyContent: "space-between"}}>
                <header>
                    <Layout
                        auth={auth}
                        checkRoleAdmin={checkRoleAdmin}/>
                </header>
                <div className={"w-full"}>
                    <div className={"body-content"}>
                        <Outlet/>
                    </div>
                </div>
            </section>
        </>

    )
}
export default IndexAdmin