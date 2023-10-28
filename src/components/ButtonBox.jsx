import styles from './ButtonBox.module.css'

const ButtonBox = ({ children }) => {
    return (
        <div className={styles.bottom}>
            <div className={styles.numpad}>{children}</div>
        </div>
    )
}

export default ButtonBox
