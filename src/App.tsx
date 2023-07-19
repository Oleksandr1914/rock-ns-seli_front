import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ForGroup from "./pages/ForGroup"
import Gallery from "./pages/Gallery"
import Header from "./components/Header"
import Contacts from "./pages/Contacts"
import EighteenYear from "./components/EighteenYear"
import NineteenthYear from "./components/NineteenthYear"
import TwentyFirstYear from "./components/TwentyFirstYear"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/group" element={<ForGroup />} />
        <Route path="/gallery" element={<Gallery />} >
          <Route index element={<EighteenYear />} />
          <Route path="2018" element={<EighteenYear />} />
          <Route path="2019" element={<NineteenthYear />} />
          <Route path="2021" element={<TwentyFirstYear />} />
        </Route>
        <Route path="/contacts" element={<Contacts />} />
        {/* <Route path="/*" element={<Navigate to={"/"} />} /> */}
      </Routes>
    </>
  )
}

export default App
