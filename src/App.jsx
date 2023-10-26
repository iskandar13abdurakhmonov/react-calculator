import Bottom from './components/Bottom'
import Calculator from './components/Calculator'
import Top from './components/Top'
import { CalculatorProvider } from './context/context'

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <main className="main">
                    <div className="main__container">
                        <CalculatorProvider>
                            <Calculator>
                                <Top />
                                <Bottom />
                            </Calculator>
                        </CalculatorProvider>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default App
