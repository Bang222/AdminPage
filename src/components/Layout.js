import React, {useState} from "react";
import {HiMenuAlt3} from "react-icons/hi";
import {MdOutlineDashboard} from "react-icons/md";
import {TbReportAnalytics} from "react-icons/tb";
import {AiOutlineUser, AiOutlineHeart, AiFillHome} from "react-icons/ai";
import {FiFolder, FiShoppingCart} from "react-icons/fi";
import {Link,NavLink,useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logOut} from "../redux/Apirequest"

const Layout = (props) => {
    const {auth,checkRoleAdmin} = props
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleLogout = async () => {
        const data = {
            refreshToken: auth?.refreshToken
        }
        await logOut(dispatch, data)
        navigate("/login")
    }
    const menusOfManager = [
        {name: "Home", link: "/home", icon: AiFillHome},
        {name: "categories", link: "categories", icon: MdOutlineDashboard},
    ];
    const menus = [
        {name: "Home", link: "/admin", icon: AiFillHome},
        {name: "Manager Ideas", link: "manager-ideas", icon: MdOutlineDashboard},
        {name: "Manager Users", link: "manager-users", icon: AiOutlineUser},
    ];
    const [open, setOpen] = useState(true);
    return (
        <>
            {
                checkRoleAdmin ?
                    <section className="flex gap-6">
                        <div
                            className={`bg-[#0e0e0e] min-h-screen ${
                                open ? "w-72" : "w-16"
                            } duration-500 text-gray-100 px-4`}
                        >
                            <div className="py-3 flex justify-end">
                                <HiMenuAlt3
                                    size={26}
                                    className="cursor-pointer"
                                    onClick={() => setOpen(!open)}
                                />
                            </div>
                            <div className="mt-4 flex flex-col gap-4 relative">
                                {menus?.map((menu, i) => (
                                    <Link
                                        to={menu?.link}
                                        key={i}
                                        className={` ${
                                            menu?.margin && "mt-5"
                                        } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                                    >
                                        <div>{React.createElement(menu?.icon, {size: "20"})}</div>
                                        <h2
                                            style={{
                                                transitionDelay: `${i + 3}00ms`,
                                            }}
                                            className={`whitespace-pre duration-500 ${
                                                !open && "opacity-0 translate-x-28 overflow-hidden"
                                            }`}
                                        >
                                            {menu?.name}
                                        </h2>
                                        <h2
                                            className={`${
                                                open && "hidden"
                                            } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                                        >
                                            {menu?.name}
                                        </h2>
                                    </Link>
                                ))}
                                <section className ="flex pl-3 pt-[500px]">
                                    <i className="fa fa-sign-out" style={{paddingTop:"3px",cursor: "pointer"}} aria-hidden="true"
                                       onClick={handleLogout}
                                    ></i>
                                    <h2
                                        style={{
                                            transitionDelay: `${11}00ms`,
                                        }}
                                        className={`whitespace-pre duration-500 cursor-pointer w-fit pl-2 ${
                                            !open && "opacity-0 translate-x-28 overflow-hidden text-center"
                                        }`}
                                        onClick={handleLogout}
                                    >
                                        <Link
                                            to={"/login"}> Log Out</Link>
                                    </h2>
                                </section>
                            </div>
                        </div>
                    </section>
                    :
                    <section className="flex gap-6">
                        <div
                            className={`bg-[#0e0e0e] min-h-screen ${
                                open ? "w-72" : "w-16"
                            } duration-500 text-gray-100 px-4`}
                        >
                            <div className="py-3 flex justify-end">
                                <HiMenuAlt3
                                    size={26}
                                    className="cursor-pointer"
                                    onClick={() => setOpen(!open)}
                                />
                            </div>
                            <div className="mt-4 flex flex-col gap-4 relative">
                                {menusOfManager?.map((menu, i) => (
                                    <Link
                                        to={menu?.link}
                                        key={i}
                                        className={` ${
                                            menu?.margin && "mt-5"
                                        } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                                    >
                                        <div>{React.createElement(menu?.icon, {size: "20"})}</div>
                                        <h2
                                            style={{
                                                transitionDelay: `${i + 3}00ms`,
                                            }}
                                            className={`whitespace-pre duration-500 ${
                                                !open && "opacity-0 translate-x-28 overflow-hidden"
                                            }`}
                                        >
                                            {menu?.name}
                                        </h2>
                                        <h2
                                            className={`${
                                                open && "hidden"
                                            } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                                        >
                                            {menu?.name}
                                        </h2>
                                    </Link>
                                ))}
                                <div className ="flex pl-3" style={{paddingTop:"500px"}} >
                                    <i className="fa fa-sign-out" style={{paddingTop:"3px",cursor: "pointer"}} aria-hidden="true"
                                       onClick={handleLogout}
                                    ></i>
                                    <h2
                                        style={{
                                            transitionDelay: `${11}00ms`,
                                        }}
                                        className={`whitespace-pre duration-500 cursor-pointer w-fit pl-2 ${
                                            !open && "opacity-0 translate-x-28 overflow-hidden text-center"
                                        }`}
                                        onClick={handleLogout}
                                    >
                                        <Link to={"/login"}> Log Out</Link>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </section>
            }
        </>
    );
}
export default Layout;
