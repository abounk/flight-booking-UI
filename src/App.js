import "./App.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Home } from "./pages/home/Home"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
