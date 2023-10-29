/* eslint-disable react/prop-types */
import styles from './Screen.module.css'

const Screen = ({ theme, value }) => {
    return (
        <div
            style={
                theme === 'dark'
                    ? { backgroundColor: 'hsl(224, 36%, 15%)' }
                    : theme === 'light'
                    ? { backgroundColor: 'hsl(0, 0%, 93%)' }
                    : { backgroundColor: 'hsl(268, 71%, 12%)' }
            }
            className={styles.headerBottom}
        >
            <p className={styles.outputPanel}>{value}</p>
        </div>
    )
}

export default Screen
