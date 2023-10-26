import { useState } from 'react'
import Switch from 'react-switch'

export default function Top() {
    const [isChecked, setIsChecked] = useState(false)

    const handleChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div className="top">
            <div className="header-top">
                <h1 className="header-logo">calc</h1>
                <div className="switch">
                    <p className="switch-text">
                        theme
                    </p>
                    <Switch
                        isChecked={isChecked}
                        onChange={() => handleChange()}
                    />
                </div>
            </div>
            <div className="header-bottom">
                <div className="output-panel">
                    <p className="output">399,981</p>
                </div>
            </div>
        </div>
    )
}
