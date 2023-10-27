/* eslint-disable react/prop-types */
import { ACTIONS } from '../App'

export default function DigitButton({ dispatch, digit }) {
    return (
        <button
            className="key key-white"
            onClick={() =>
                dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })
            }
        >
            {digit}
        </button>
    )
}
