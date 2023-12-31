/* eslint-disable no-const-assign */
import { useState } from 'react'

import Wrapper from './components/Wrapper'
import Screen from './components/Screen'
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'
import Header from './components/Header'

const btnValues = [
    [7, 8, 9, 'DEL'],
    [4, 5, 6, '+'],
    [1, 2, 3, '-'],
    ['.', 0, '/', 'x'],
    ['RESET', '='],
]

const toLocaleString = (num) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ')

const removeSpaces = (num) => num.toString().replace(/\s/g, '')

const App = () => {
    const [theme, setTheme] = useState('dark')

    console.log(theme)

    const switchTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else if (theme === 'light') {
            setTheme('blue')
        } else {
            setTheme('dark')
        }
    }

    let [calc, setCalc] = useState({
        sign: '',
        num: 0,
        res: 0,
    })

    const numClickHandler = (e) => {
        e.preventDefault()
        const value = e.target.innerHTML

        if (removeSpaces(calc.num).length < 16) {
            setCalc({
                ...calc,
                num:
                    calc.num === 0 && value === '0'
                        ? '0'
                        : removeSpaces(calc.num) % 1 === 0
                        ? toLocaleString(Number(removeSpaces(calc.num + value)))
                        : toLocaleString(calc.num + value),
                res: !calc.sign ? 0 : calc.res,
            })
        }
    }

    const commaClickHandler = (e) => {
        e.preventDefault()
        const value = e.target.innerHTML

        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.')
                ? calc.num + value
                : calc.num,
        })
    }

    const signClickHandler = (e) => {
        e.preventDefault()
        const value = e.target.innerHTML

        setCalc({
            ...calc,
            sign: value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0,
        })
    }

    const equalsClickHandler = () => {
        if (calc.sign && calc.num) {
            const math = (a, b, sign) =>
                sign === '+'
                    ? a + b
                    : sign === '-'
                    ? a - b
                    : sign === 'x'
                    ? a * b
                    : a / b

            setCalc({
                ...calc,
                res:
                    calc.num === '0' && calc.sign === '/'
                        ? "Can't divide with 0"
                        : toLocaleString(
                              math(
                                  Number(removeSpaces(calc.res)),
                                  Number(removeSpaces(calc.num)),
                                  calc.sign
                              )
                          ),
                sign: '',
                num: 0,
            })
        }
    }

    const percentClickHandler = () => {
        let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0
        let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0

        setCalc({
            ...calc,
            num: (num /= Math.pow(100, 1)),
            res: (res /= Math.pow(100, 1)),
            sign: '',
        })
    }

    const resetClickHandler = () => {
        setCalc({
            ...calc,
            sign: '',
            num: 0,
            res: 0,
        })
    }

    const deleteClickHandlder = () => {
        const newCalc = { ...calc }

        let numString = newCalc.num.toString()

        numString = numString.slice(0, -1)

        newCalc.num = Number(numString)

        setCalc(newCalc)
    }

    return (
        <div
            className={`App ${
                theme === 'dark' ? 'dark' : theme === 'light' ? 'light' : 'blue'
            }`}
        >
            <div className="wrapper">
                <main className="main">
                    <div className="main__container">
                        <Wrapper>
                            <Header
                                theme={theme}
                                switchTheme={switchTheme}
                            />
                            <Screen
                                theme={theme}
                                value={calc.num ? calc.num : calc.res}
                            />
                            <ButtonBox theme={theme}>
                                {btnValues.flat().map((btn, i) => {
                                    return (
                                        <Button
                                            theme={theme}
                                            key={i}
                                            value={btn}
                                            onClick={
                                                btn === 'RESET'
                                                    ? resetClickHandler
                                                    : btn === 'DEL'
                                                    ? deleteClickHandlder
                                                    : btn === '+-'
                                                    ? percentClickHandler
                                                    : btn === '='
                                                    ? equalsClickHandler
                                                    : btn === '/' ||
                                                      btn === 'x' ||
                                                      btn === '-' ||
                                                      btn === '+'
                                                    ? signClickHandler
                                                    : btn === '.'
                                                    ? commaClickHandler
                                                    : numClickHandler
                                            }
                                        />
                                    )
                                })}
                            </ButtonBox>
                        </Wrapper>
                    </div>
                </main>
                <footer className="footer">
                    <div className="footer__container">
                        <div className="attribution">
                            Challenge by{' '}
                            <a
                                href="https://www.frontendmentor.io?ref=challenge"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Frontend Mentor
                            </a>
                            . Coded by{' '}
                            <a href="https://www.frontendmentor.io/profile/iskandar13abdurakhmonov">
                                eescan
                            </a>
                            .
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default App
