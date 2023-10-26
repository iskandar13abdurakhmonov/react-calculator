import { useContext } from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'

const CalculatorContext = createContext()

const initialState = {
    currentNumber: 0,
    operator: null,
    accumulator: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'addition':
            return {
                ...state,
                currentNumber: action.payload,
                operator: action.payload,
                accumulator: action.payload,
            }
        default:
            return state
    }
}

const CalculatorProvider = ({ children }) => {
    const [{ currentNumber, operator, accumulator }, dispatch] = useReducer(
        reducer,
        initialState
    )

    return (
        <CalculatorContext.Provider
            value={{ currentNumber, operator, accumulator, dispatch }}
        >
            {children}
        </CalculatorContext.Provider>
    )
}

const useCalculator = () => {
    const context = useContext(CalculatorContext)
    if (context === undefined)
        throw new Error(
            'CalculatorContext was used outside of the CalculatorProvider'
        )
    return context
}

export { useCalculator, CalculatorProvider }
