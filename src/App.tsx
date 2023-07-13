import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ForGroup from "./pages/ForGroup"
import Gallery from "./pages/Gallery"
import Header from "./components/Header"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/group" element={<ForGroup />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/*" element={<Navigate to={"/"} />} /> */}
      </Routes>
    </>
  )
}

export default App
