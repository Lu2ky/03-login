import { Link, useNavigate } from "react-router-dom"
import type { homeProps } from "../../types/types"
import { auth } from "../../firebase"
import styles from "./Home.module.css"

function logOut() {
    return auth.signOut()
    navigate("/")
}

export function Home({ name }: homeProps) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.innerBox}>
                    <div className={styles.heading}>
                        <h1 className={styles.subheading}>
                            <Link to="/login">Login</Link>
                        </h1>
                        <br />
                        <h1 className={styles.subheading}>
                            <Link to="/register">Sign up</Link>
                        </h1>
                    </div>
                </div>
                <h2 className={styles.heading}>
                    {name || null ? `Bienvenido - ${name}` : "Iniciar sesión"}
                </h2>
                <button
                    className={styles.button}
                    onClick={logOut}
                >
                    Salir
                </button>
            </div>
        </>
    )
}
