import { BrowserRouter, Routes, Route } from "react-router"
import HomePage from "./pages/HomePage"

function App() {

  return (
    <>
    <h1>App Page</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
