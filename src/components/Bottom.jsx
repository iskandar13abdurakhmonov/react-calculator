/* eslint-disable react/prop-types */
import DigitButton from "./DigitButton"

export default function Bottom({ dispatch }) {
    
    return (
        <div className="bottom">
            <div className="numpad">
                <DigitButton digit='7' dispatch={dispatch}/>
                <button className="key key-white">7</button>
                <button className="key key-white">8</button>
                <button className="key key-white">9</button>
                <button className="key key-blue">del</button>
                <button className="key key-white">4</button>
                <button className="key key-white">5</button>
                <button className="key key-white">6</button>
                <button className="key key-white">+</button>
                <button className="key key-white">1</button>
                <button className="key key-white">2</button>
                <button className="key key-white">3</button>
                <button className="key key-white">-</button>
                <button className="key key-white">.</button>
                <button className="key key-white">0</button>
                <button className="key key-white">/</button>
                <button className="key key-white">x</button>
                <button className="bottom-keys key-blue key">reset</button>
                <button className="bottom-keys key-red key">=</button>
            </div>
        </div>
    )
}
