import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Login } from "../components/Login/login"
import { Home } from "../pages/home/home"
import { Signup } from "../components/Signup/Signup"
import { auth } from "../firebase"
import { useEffect, useState } from "react"

export function MyRoutes() {
    const [userName, setuserName] = useState<string | null>("")
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setuserName(user.displayName)
            } else {
                setuserName("")
            }
        })
    })
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<Home name={userName as string}></Home>}
                ></Route>
                <Route
                    path="/login"
                    element={<Login></Login>}
                ></Route>
                <Route
                    path="/register"
                    element={<Signup></Signup>}
                ></Route>
            </Routes>
        </Router>
    )
}
