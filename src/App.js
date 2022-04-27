import logo from "./logo.svg"
import "./App.css"

// import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import StickyHeadTable from "./components/Table/StickyHeadTable"

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/home" element={}></Route>
      </Routes> */}
      <Navbar />
      <StickyHeadTable />
    </div>
  )
}

export default App
