import ManagerUsers from "../components/Admin/users";
import Login from "../components/auth/login/Login";
import {ProSidebarProvider} from "react-pro-sidebar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ManagerUserCategories from "../components/manager-departments/users";
import ManagerCategories from "../components/manager-departments/Department";
import Index from "../components/auth/checkUserLogin";
import Authorization from "../components/auth/checkRoles";
import IndexAdmin from "../components/Admin";
import IndexManager from "../components/manager-departments";
import HomepageAdmin from "../components/Admin/HomeAdmin/HomepageAdmin";
import HomepageManager from "../components/manager-departments/home/HomepageManager";
import Ideas from "../components/Admin/idea";


const RoutesApp = () => {
    return (
        <Router>
            <ProSidebarProvider>
                <Routes>
                    <Route path="/" element={<Login/>}>
                        <Route path="login" element={<Login/>}/>
                    </Route>
                    <Route path="home" element={<Index><Authorization><IndexManager/></Authorization></Index>}>
                        <Route index element={<HomepageManager/>}/>
                        <Route path="categories" element={<ManagerCategories/>}/>
                        <Route path="users" element={<ManagerUserCategories/>}/>
                    </Route>
                    <Route path="admin" element={<Index><Authorization><IndexAdmin/></Authorization></Index>}>
                        <Route index element={<HomepageAdmin/>}/>
                        <Route path="manager-users" element={<ManagerUsers/>}/>
                        <Route path="manager-ideas" element={<Ideas/>}/>
                    </Route>
                </Routes>
            </ProSidebarProvider>
        </Router>
    )
        ;
}
{/*<Route path="/not-found" element={<NotFound />} />*/
}
{/*<Route element={<NotFound />} />*/
}
{/*<Route path="*" element={<Navigate to="not-found"/>} />*/
}

export default RoutesApp;
