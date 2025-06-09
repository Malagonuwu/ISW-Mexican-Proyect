import { useState } from 'react'
import fondo from '../assets/FondoGeneral.jpg'

export default function Login() {
  const [form, setForm] = useState({
    correo: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Intentando iniciar sesión con:', form)
    // Aquí luego conectamos con Supabase
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex justify-center items-center px-4"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-black/70 backdrop-blur-md text-white p-6 md:p-10 rounded-xl w-full max-w-md shadow-2xl"
      >
        <h1 className="text-4xl font-bold text-center text-white mb-8 tracking-widest">
          INICIAR SESIÓN
        </h1>

        <div className="space-y-4">
          <input
            className="w-full p-2 rounded bg-white/10 placeholder-white"
            placeholder="Correo institucional o número de boleta"
            name="correo"
            value={form.correo}
            onChange={handleChange}
          />
          <input
            type="password"
            className="w-full p-2 rounded bg-white/10 placeholder-white"
            placeholder="Contraseña"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded transition-all font-bold mt-2"
          >
            Ingresar
          </button>

          <p className="text-center text-pink-300 text-sm mt-4">
            ¿Aún no tienes una cuenta?{' '}
            <a href="/registro" className="underline">Registrarse</a>
          </p>
        </div>
      </form>
    </div>
  )
}
