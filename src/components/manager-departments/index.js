import {Outlet} from "react-router-dom";
import Layout from "../Layout";

const IndexManager = (props) => {
    const {auth, checkRoleAdmin} = props
    return (
            <>
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