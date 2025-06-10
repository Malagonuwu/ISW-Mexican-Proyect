import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Acceso from './pages/Acceso'
import Salida from './pages/Salida'
import Historial from './pages/Historial'
import Alumno from './pages/Alumno'

import Register from './pages/Register'
import Login from './pages/Login'
import Recuperar from './pages/Recuperar'
import HomeUser from './pages/HomeUser'
import Perfil from './pages/Perfil'
import Vehiculos from './pages/Vehiculos'
import GenerarCodigo from './pages/GenerarCodigo'
import AgregarVehiculo from './pages/AgregarVehiculo'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/acceso" element={<Acceso />} />
      <Route path="/salida" element={<Salida />} />
      <Route path="/historial" element={<Historial />} />
      <Route path="/alumno" element={<Alumno />} />

      {/* Ruta corregida, antes se repetía el path "/" */}
      <Route path="/homeuser" element={<HomeUser />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recuperar" element={<Recuperar />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/vehiculos" element={<Vehiculos />} />
      <Route path="/codigo" element={<GenerarCodigo />} />
      <Route path="/vehiculos/nuevo" element={<AgregarVehiculo />} />
    </Routes>
  )
}

export default App
