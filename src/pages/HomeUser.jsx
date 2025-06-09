import fondo from '../assets/FondoGeneral.jpg'
import { useState } from 'react'

export default function HomeUser() {
  // Simulación de vehículos del usuario
  const [vehiculos] = useState([
    { tipo: 'Motocicleta', placas: 'DYB35VF', imagen: '/src/assets/Moto.png' },
    { tipo: 'Motocicleta', placas: 'XYZ1234', imagen: '/src/assets/Moto.png' },
  ])

  const [index, setIndex] = useState(0)

  const handleLeft = () => {
    setIndex(prev => (prev === 0 ? vehiculos.length - 1 : prev - 1))
  }

  const handleRight = () => {
    setIndex(prev => (prev === vehiculos.length - 1 ? 0 : prev + 1))
  }

  const handleGenerarCodigo = () => {
    const codigo = Math.random().toString(36).substring(2, 8).toUpperCase()
    alert(`Tu código es: ${codigo}`)
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center px-4"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <h1 className="text-4xl font-bold text-white tracking-widest mb-6 text-center">
        MIS VEHÍCULOS
      </h1>

      {/* Carrusel */}
      <div className="relative w-full max-w-xl flex items-center justify-center">
        <button
          onClick={handleLeft}
          className="absolute left-0 bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded-full"
        >
          ⬅
        </button>

        <div className="bg-black/70 backdrop-blur-md text-white p-4 rounded-xl w-full mx-12 flex flex-col items-center">
          <img
            src={vehiculos[index].imagen}
            alt="vehículo"
            className="w-32 h-32 object-cover mb-4"
          />
          <h2 className="text-xl font-bold">{vehiculos[index].tipo}</h2>
          <p className="text-pink-300">{vehiculos[index].placas}</p>
        </div>

        <button
          onClick={handleRight}
          className="absolute right-0 bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 rounded-full"
        >
          ➡
        </button>
      </div>

      {/* Generar Código */}
      <button
        onClick={handleGenerarCodigo}
        className="mt-8 bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg font-bold tracking-widest"
      >
        GENERAR CÓDIGO
      </button>
    </div>
  )
}
