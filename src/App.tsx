import { useState } from 'react';
import { TextInput } from './components/Input';
import { Checkbox } from './components/Checkbox';
import { Calendar } from './components/Calendar';
import { Timer } from './components/Timer';
import { User, Phone, PawPrint } from 'phosphor-react'
import logoPet from './assets/logo-pet-saloon01.png'
import './styles/global.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-orange-300 h-4/6 mx-32 my-8 flex flex-col items-center p-8 rounded-lg w-auto">

      <img src={logoPet} alt="Logomarca Pet Saloon" className="w-72" />

      <h1 className="text-xxl font-bold text-center text-black m-8"
        >Agende o banho do seu pet aqui!
      </h1>

      <form className="w-full px-8 py-3">
        <div className="mb-8">
          <h2 className="text-lg font-bold border-b-2 border-dashed">Seus dados</h2>

          <label htmlFor="name" className="rounded-sm mb-2">
          <p className="text-blue font-bold text-sm border-t-2 border-dashed pt-2">Seu nome</p>
          <TextInput.Root>
            <TextInput.Icon>
              <User />
            </TextInput.Icon>
            <TextInput.Input id='name' type="text" placeholder="Maria Silva" />
          </TextInput.Root>
        </label>

        <label htmlFor="phoneNumber" className="rounded-sm">
          <p className="text-blue font-bold text-sm pt-2">Telefone</p>
          <TextInput.Root>
            <TextInput.Icon>
              <Phone />
            </TextInput.Icon>
            <TextInput.Input id='phoneNumber' type="number" placeholder="(11) 99999-9999" />
          </TextInput.Root>
        </label>

        <label htmlFor="whatsApp" className="flex gap-1 mb-2">
          <Checkbox />
          <p>Este número também é meu WhatsApp.</p>
        </label>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold border-b-2 border-dashed">Dados do seu pet</h2>

          <label htmlFor="petName" className="rounded-sm mb-2">
            <p className="text-blue font-bold text-sm pt-2">Nome do pet</p>
            <TextInput.Root>
              <TextInput.Icon>
                <PawPrint />
              </TextInput.Icon>
              <TextInput.Input id='petName' type="text" placeholder="Thor" />
            </TextInput.Root>
          </label>

          <label htmlFor="species">
          <p className="text-blue font-bold text-sm pt-2">Espécie</p>

            <Checkbox value="cachorro"/>
          </label>

          <label htmlFor="breed" className="rounded-sm mb-2">
            <p className="text-blue font-bold text-sm pt-2">Raça</p>
            <TextInput.Root>
              <TextInput.Icon>
                <PawPrint />
              </TextInput.Icon>
              <TextInput.Input id='breed' type="text" placeholder="Golden retriver" />
            </TextInput.Root>
          </label>
        </div>

        <div>
          <h2 className="text-lg font-bold border-b-2 border-dashed">Agendamento</h2>

          <section className="flex justify-between">
            <label htmlFor='date'>
              <p className="text-blue font-bold text-sm pt-2">Data</p>
              <Calendar id="date"/>
            </label>

            <label htmlFor="time">
              <p className="text-blue font-bold text-sm pt-2">Hora</p>
              <Timer id="time"/>
            </label>
          </section>
        </div>
      </form>
    </div>
  )
}

