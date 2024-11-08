import AppRoutes from './Routes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from '../src/assets/Components/JSX/Header'
import Home from './assets/Components/JSX/Home'
import Footer from './assets/Components/JSX/Footer'
import Instrumentos from './assets/Components/JSX/Instrumentos'

import Contatos from './assets/Components/JSX/Contatos'

import './App.css'
import Endereco from './assets/Components/JSX/Endereco'


function App() {
 

  return (
    <>
    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Instrumentos' element={<Instrumentos />}/>
        <Route path='Endereco' element={<Endereco />}/>
        <Route path='Contatos' element={<Contatos />}/>
      </Routes>
      <Footer />
    </Router>
    
     
    </>
  )
}

export default App
