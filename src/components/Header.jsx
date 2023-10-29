/* eslint-disable react/prop-types */
import styles from './Header.module.css'

export default function Header({ switchTheme, theme }) {
    const handleRadioChange = (e) => {
        switchTheme(e.target.value)
    }

    return (
        <div className={styles.header}>
            <span
                className={`${styles.logo} ${
                    theme === 'dark'
                        ? styles.logoDark
                        : theme === 'light'
                        ? styles.logoLight
                        : styles.logoBlue
                }`}
            >
                calc
            </span>
            <div className={styles.headerRight}>
                <span
                    className={`${styles.text} ${
                        theme === 'dark'
                            ? styles.logoDark
                            : theme === 'light'
                            ? styles.logoLight
                            : styles.logoBlue
                    }`}
                >
                    theme
                </span>
                <div
                    className={`${styles.toggleSwitch} ${
                        theme === 'dark'
                            ? styles.bgDark
                            : theme === 'light'
                            ? styles.bgLight
                            : styles.bgBlue
                    }`}
                >
                    <input
                        type="radio"
                        name="toggle-switch"
                        className={`${styles.input} ${
                            theme === 'dark' ? styles.inputDark : ''
                        }`}
                        value="dark"
                        checked={theme === 'dark'}
                        onChange={handleRadioChange}
                    />

                    <input
                        type="radio"
                        name="toggle-switch"
                        className={`${styles.input} ${
                            theme === 'light' ? styles.inputLight : ''
                        }`}
                        value="light"
                        checked={theme === 'light'}
                        onChange={handleRadioChange}
                    />

                    <input
                        type="radio"
                        name="toggle-switch"
                        className={`${styles.input} ${
                            theme === 'blue' ? styles.inputBlue : ''
                        }`}
                        value="blue"
                        checked={theme === 'blue'}
                        onChange={handleRadioChange}
                    />
                </div>
            </div>
        </div>
    )
}
