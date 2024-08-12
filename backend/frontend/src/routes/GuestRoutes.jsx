import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate, Outlet } from "react-router-dom";


export default function GuestRoutes() {

    const { user } = useContext(UserContext);

    return !user.email ? <Outlet/> : <Navigate to = '/dashboard'/>
}