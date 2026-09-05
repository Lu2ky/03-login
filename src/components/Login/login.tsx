import styles from "./login.module.css"
import { Link, useNavigate, type NavigateFunction } from "react-router-dom"
import type { values_Login } from "../../types/types"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"
import { InputControl } from "../Inputs/Inputs"

export function Login() {
    const navigate: NavigateFunction = useNavigate()
    const [values, setvalues] = useState<values_Login>({
        email: "",
        password: "",
    })
    const [_submitButton, setsubmitButton] = useState<boolean>(false)
    const [errorMsg, seterrorMsg] = useState<string>("")
    const Loguearse = () => {
        if (!values.email || !values.password) {
            seterrorMsg("Datos incompletos")
            return
        }
        seterrorMsg("")
        setsubmitButton(false)
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then(async (_res) => {
                setsubmitButton(false)
                navigate("/")
            })
            .catch((err) => {
                setsubmitButton(false)
                seterrorMsg(err.message)
            })
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.innerBox}>
                    <h1 className={styles.heading}>Login</h1>
                    <InputControl
                        {...{
                            label: "email",
                            placeholder: "enter a email",
                        }}
                        onChange={(event) => {
                            setvalues((prev: values_Login) => ({
                                ...prev,
                                email: event.target.value,
                            }))
                        }}
                    />
                    <InputControl
                        {...{
                            label: "password",
                            placeholder: "enter a password",
                        }}
                        onChange={(event) => {
                            setvalues((prev: values_Login) => ({
                                ...prev,
                                password: event.target.value,
                            }))
                        }}
                    />
                    <div className={styles.footer}>
                        <b className={styles.error}>{errorMsg}</b>
                        <button
                            onClick={Loguearse}
                            className={styles.button}
                        >
                            Login
                        </button>
                        <p>
                            <span>
                                <Link to="/register">Registrar cuenta</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
