import styles from "./styles.module.css"

export default function InputText({placeholder}) {

    return (
        <input className={styles.wraper} type="text" placeholder={placeholder} />
    )
}