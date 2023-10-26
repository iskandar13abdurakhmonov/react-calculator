import Bottom from "./components/Bottom"
import Calculator from "./components/Calculator"
import Top from "./components/Top"

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <main className="main">
                    <div className="main__container">
                      <Calculator>
                        <Top/>
                        <Bottom/>
                      </Calculator>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default App
