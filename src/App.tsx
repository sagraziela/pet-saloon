import { useState } from 'react'
import './styles/global.css'
import logoPet from './assets/logo-pet-sallon.png'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-orange-300 mx-32 flex flex-col items-center p-8 rounded-lg w-auto">

      <img src={logoPet} alt="Logomarca Pet Sallon" className="w-52" />

      <h1 className="text-xxl font-bold text-center text-black m-8"
        >Agende o banho do seu pet aqui!
      </h1>

      <form className="">
        <input className="h-6" type="text" name="" id="" />
      </form>
    </div>
  )
}

