/* eslint-disable react/prop-types */
import styles from './ButtonBox.module.css'

const ButtonBox = ({ children, theme }) => {
    return (
        <div
            className={`${styles.bottom} ${
                theme === 'dark'
                    ? styles.dark
                    : theme === 'light'
                    ? styles.light
                    : styles.blue
            }`}
        >
            <div className={styles.numpad}>{children}</div>
        </div>
    )
}

export default ButtonBox
