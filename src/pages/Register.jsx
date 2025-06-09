import { useState } from 'react'
import fondo from '../assets/FondoGeneral.jpg'

export default function Register() {
  const [form, setForm] = useState({
    nombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    carrera: '',
    boleta: '',
    correo: '',
    comprobante: null,
    password: '',
    confirmPassword: '',
    acepto: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex justify-center items-center px-4"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="w-full max-w-screen-md bg-black/70 backdrop-blur-md p-6 md:p-10 rounded-xl shadow-2xl text-white">
        <h1 className="text-4xl font-bold text-center text-white mb-8 tracking-wider">REGISTRO</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="p-2 rounded bg-white/10" placeholder="Nombre(s)" name="nombre" value={form.nombre} onChange={handleChange} />
          <input className="p-2 rounded bg-white/10" placeholder="Apellido paterno" name="apellidoPaterno" value={form.apellidoPaterno} onChange={handleChange} />
          <input className="p-2 rounded bg-white/10" placeholder="Apellido materno" name="apellidoMaterno" value={form.apellidoMaterno} onChange={handleChange} />
          <input className="p-2 rounded bg-white/10" placeholder="No. de boleta" name="boleta" value={form.boleta} onChange={handleChange} />
          <select name="carrera" className="p-2 rounded bg-white/10" onChange={handleChange} value={form.carrera}>
            <option value="">Seleccionar carrera</option>
            <option value="ISC">Sistemas Computacionales</option>
            <option value="IA">Inteligencia Artificial</option>
          </select>
          <input className="p-2 rounded bg-white/10" placeholder="Correo institucional" name="correo" value={form.correo} onChange={handleChange} />
          <div className="col-span-1 sm:col-span-2">
            <label className="flex justify-center bg-pink-600 hover:bg-pink-700 text-white py-2 rounded cursor-pointer">
              Subir archivo
              <input type="file" name="comprobante" onChange={handleChange} className="hidden" />
            </label>
          </div>
          <input type="password" className="p-2 rounded bg-white/10" placeholder="Contraseña" name="password" value={form.password} onChange={handleChange} />
          <input type="password" className="p-2 rounded bg-white/10" placeholder="Confirmar contraseña" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />

          <div className="col-span-1 sm:col-span-2 text-sm flex items-start mt-2">
            <input type="checkbox" name="acepto" checked={form.acepto} onChange={handleChange} className="mr-2 mt-1" />
            <label>Acepto los <a href="#" className="underline text-pink-300">términos y condiciones</a>.</label>
          </div>

          <div className="col-span-1 sm:col-span-2">
            <button type="submit" className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white py-2 rounded font-bold transition-all">
              Registrarse
            </button>
          </div>

          <p className="col-span-1 sm:col-span-2 text-center mt-2 text-pink-300 text-sm">
            Ya tengo una cuenta. <a href="/login" className="underline">Ingresar</a>
          </p>
        </form>
      </div>
    </div>
  )
}
