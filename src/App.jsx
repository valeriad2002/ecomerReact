import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import Push from './pages/Push'
import 'bootswatch/dist/quartz/bootstrap.min.css'
import LoadinScreen from './Components/LoadinScreen'
import { useSelector } from 'react-redux'
import Protectedrout from './Components/Protectedrout'

function App() {
  const [count, setCount] = useState(0)
  const isLoading = useSelector(state => state.isLoading)
  return (
    <div className="App">
      <HashRouter>
        <NavBar />

        {isLoading ?? < LoadinScreen />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/login" element={<Login />} />
          <Route element={<Protectedrout />}>
            <Route path="/push" element={<Push />} />
          </Route>


        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
