/* eslint-disable react/prop-types */
import styles from './Button.module.css'

const Button = ({ value, onClick, theme }) => {
    console.log(value)

    return (
        <button
            style={
                theme === 'dark'
                    ? {
                          backgroundColor: 'hsl(30, 25%, 89%)',
                          color: 'hsl(221, 14%, 31%)',
                      }
                    : theme === 'light'
                    ? {
                          backgroundColor: 'hsl(45, 7%, 89%)',
                          color: 'hsl(60, 10%, 19%)',
                      }
                    : {
                          backgroundColor: 'hsl(268, 47%, 21%)',
                          color: 'hsl(52, 100%, 62%)',
                      }
            }
            className={`${styles.key} ${
                value === '=' || value === 'C' ? styles.bottomKeys : ''
            } ${value === '=' ? styles.keyRed : ''}`}
            onClick={onClick}
        >
            {value}
        </button>
    )
}

export default Button
