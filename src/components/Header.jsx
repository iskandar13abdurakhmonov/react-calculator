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
                    className={`${styles.logo} ${
                        theme === 'dark'
                            ? styles.logoDark
                            : theme === 'light'
                            ? styles.logoLight
                            : styles.logoBlue
                    }`}
                >
                    theme
                </span>
                <div>
                    <input
                        type="radio"
                        name="toggle-switch"
                        value="dark"
                        checked={theme === 'dark'}
                        onChange={handleRadioChange}
                    />

                    <input
                        type="radio"
                        name="toggle-switch"
                        value="light"
                        checked={theme === 'light'}
                        onChange={handleRadioChange}
                    />

                    <input
                        type="radio"
                        name="toggle-switch"
                        value="blue"
                        checked={theme === 'blue'}
                        onChange={handleRadioChange}
                    />
                </div>
                <button onClick={() => switchTheme()}>switch</button>
            </div>
        </div>
    )
}
