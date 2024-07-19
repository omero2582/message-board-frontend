import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import SignUp from "./SignUp"
import NotFound from "./NotFound"
import Navbar from "./Navbar"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
