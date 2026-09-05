import { useState } from "react"
import styles from "./Signup.module.css"
import { Link, useNavigate, type NavigateFunction } from "react-router-dom"
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import type { values_Signup } from "../../types/types"
import { InputControl } from "../Inputs/Inputs"

export function Signup() {
    const navigate: NavigateFunction = useNavigate()
    const [values, setValues] = useState<values_Signup>({
        name: "",
        email: "",
        password: "",
    })
    const [errorMsg, setErrorMsg] = useState("")
    const [submitButton, setSubmitButton] = useState(false)
    const registro = () => {
        console.log(values)
        if (!values.name || !values.email || !values.password) {
            setErrorMsg("Llene todos los campos")
            return
        }
        setErrorMsg("")
        setSubmitButton(true)
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then(async (res) => {
                setSubmitButton(false)
                const user = res.user
                await updateProfile(user, { displayName: values.name })
                navigate("/")
            })
            .catch((err) => {
                setSubmitButton(false)
                setErrorMsg(err.message)
            })
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.innerBox}>
                    <h1 className={styles.headig}>Registro</h1>
                    <InputControl
                        {...{ label: "name", placeholder: "enter a name" }}
                        onChange={(event) => {
                            setValues((prev: values_Signup) => ({
                                ...prev,
                                name: event.target.value,
                            }))
                        }}
                    />
                    <InputControl
                        {...{ label: "email", placeholder: "enter a email" }}
                        onChange={(event) => {
                            setValues((prev: values_Signup) => ({
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
                            setValues((prev: values_Signup) => ({
                                ...prev,
                                password: event.target.value,
                            }))
                        }}
                    />
                    <div className={styles.footer}>
                        <b className={styles.error}>{errorMsg}</b>
                        <button
                            className={styles.button}
                            onClick={registro}
                            disabled={submitButton}
                        >
                            Sign in
                        </button>
                        <p>
                            <span>
                                <Link to="/login"> Login</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
