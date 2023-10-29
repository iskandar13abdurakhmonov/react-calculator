/* eslint-disable react/prop-types */
import styles from './Button.module.css'

const Button = ({ value, onClick, theme }) => {
    console.log(value)

    return (
        <button
            className={`${styles.key} ${
                value === '=' || value === 'C' ? styles.bottomKeys : ''
            } ${
                theme === 'dark'
                    ? styles.darkKey
                    : theme === 'light'
                    ? styles.lightKey
                    : styles.blueKey
            } ${
                value === '=' && theme === 'dark' ? styles.equalsDarkKey : ''
            } ${value === 'C' && theme === 'dark' ? styles.resetDarkKey : ''} ${
                value === 'DEL' && theme === 'dark' ? styles.deleteDarkKey : ''
            } ${
                value === '=' && theme === 'light' ? styles.equalsLightKey : ''
            } ${
                value === 'C' && theme === 'light' ? styles.resetLightKey : ''
            } ${
                value === 'DEL' && theme === 'light'
                    ? styles.deleteLightKey
                    : ''
            } ${
                value === '=' && theme === 'blue' ? styles.equalsBlueKey : ''
            } ${value === 'C' && theme === 'blue' ? styles.resetBlueKey : ''} ${
                value === 'DEL' && theme === 'blue' ? styles.deleteBlueKey : ''
            }`}
            onClick={onClick}
        >
            {value}
        </button>
    )
}

export default Button
