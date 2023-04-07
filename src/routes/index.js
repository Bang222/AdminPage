import ManagerUsers from "../components/Admin/users";
import Login from "../components/auth/login/Login";
import {ProSidebarProvider} from "react-pro-sidebar";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import ManagerCategories from "../components/manager-departments/Department";
import Index from "../components/auth/checkUserLogin";
import Authorization from "../components/auth/checkRoles";
import IndexAdmin from "../components/Admin";
import IndexManager from "../components/manager-departments";
import HomepageAdmin from "../components/Admin/HomeAdmin/HomepageAdmin";
import HomepageManager from "../components/manager-departments/home/HomepageManager";
import Ideas from "../components/Admin/idea";
import {useEffect, useState} from "react";
import MobileSize from "../components/mobile/MobileSize";


const RoutesApp = () => {
    const [windowSize, setWindowSize] = useState({
        width: null,
        height: null,
    });
    const [desktop, setDesktop] = useState(true);
    useEffect(() => {
        const handleSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener("resize", handleSize)
        handleSize()
        return () => window.removeEventListener("resize", handleSize)
    }, [])
    useEffect(() => {
        if (windowSize.width <= 1024) {
            setDesktop(false)
        } else {
            setDesktop(true)
        }
    }, [windowSize])
    return (
        <Router>
            <ProSidebarProvider>
                <Routes>
                    <Route path="/" element={<Login/>}>
                        <Route path="login" element={<Login/>}/>
                    </Route>
                    <Route path="home" element={<Index><Authorization><IndexManager/></Authorization></Index>}>
                        <Route index element={<HomepageAdmin/>}/>
                        <Route path="categories" element={<ManagerCategories/>}/>
                        {/*<Route path="manager-users" element={<ManagerUsers/>}/>*/}
                        <Route path="manager-ideas" element={<Ideas/>}/>
                    </Route>
                    <Route path="admin" element={<Index><Authorization><IndexAdmin/></Authorization></Index>}>
                        {/*<Route index element={<ManagerUsers/>}/>*/}
                        <Route path="manager-users" element={<ManagerUsers/>}/>
                        {/*<Route path="manager-ideas" element={<Ideas/>}/>*/}
                    </Route>
                </Routes>
            </ProSidebarProvider>
        </Router>
    );
}
{/*<Route path="/not-found" element={<NotFound />} />*/
}
{/*<Route element={<NotFound />} />*/
}
{/*<Route path="*" element={<Navigate to="not-found"/>} />*/
}

export default RoutesApp;
