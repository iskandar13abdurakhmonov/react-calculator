/* eslint-disable react/prop-types */
import styles from './ButtonBox.module.css'

const ButtonBox = ({ children, theme }) => {
    return (
        <div
            style={
                theme === 'dark'
                    ? { backgroundColor: 'hsl(223, 31%, 20%)' }
                    : theme === 'light'
                    ? { backgroundColor: 'hsl(0, 5%, 81%)' }
                    : { backgroundColor: 'hsl(268, 71%, 12%)' }
            }
            className={styles.bottom}
        >
            <div className={styles.numpad}>{children}</div>
        </div>
    )
}

export default ButtonBox
