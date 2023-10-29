/* eslint-disable react/prop-types */
import styles from './Screen.module.css'

const Screen = ({ theme, value }) => {
    return (
        <div
            className={`${styles.headerBottom} ${
                theme === 'dark'
                    ? styles.darkBg
                    : theme === 'light'
                    ? styles.lightBg
                    : styles.blueBg
            }`}
        >
            <p
                className={`${styles.outputPanel} ${
                    theme === 'dark'
                        ? styles.textDark
                        : theme === 'light'
                        ? styles.textLight
                        : styles.textBlue
                }`}
            >
                {value}
            </p>
        </div>
    )
}

export default Screen
