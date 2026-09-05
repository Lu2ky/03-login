import styles from "./Inputs.module.css"
import type { propsForInputControl } from "../../types/types"

export function InputControl(props: propsForInputControl) {
    return (
        <>
            <div className={styles.container}>
                {props.label && (
                    <label className={styles.label}>{props.label}</label>
                )}
                <input
                    className={styles.input}
                    type="text"
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                ></input>
            </div>
        </>
    )
}
