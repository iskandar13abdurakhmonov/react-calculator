/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
import { useReducer } from 'react'
import Bottom from './components/Bottom'
import Calculator from './components/Calculator'
import Top from './components/Top'

export const ACTIONS = {
    ADD_DIGIT: 'add-digit',
    CHOOSE_OPERATION: 'choose-operation',
    CLEAR: 'clear',
    DELETE_DIGIT: 'delete-digit',
    EVALUATE: 'evaluate',
}

function reducer(state, { type, payload }) {
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            return {
                ...state,
                currentOperand: `${currentOperand || ''}${payload.digit}`,
            }
    }
}

function App() {
    const [{ currentOperand, previousOperand, operation }, dispatch] =
        useReducer(reducer, {})


    return (
        <div className="App">
            <div className="wrapper">
                <main className="main">
                    <div className="main__container">
                        <Calculator>
                            <Top
                                currentOperand={currentOperand}
                                previousOperand={previousOperand}
                                operation={operation}
                            />
                            <Bottom
                                dispatch={dispatch}
                            />
                        </Calculator>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default App
