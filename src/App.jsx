import './App.css'
import { FormularioDeEvento } from './components/Formulario'
import { Tema } from './components/Tema'

function App() {

  const temas = [
    {
      id: 1,
      name: "front-end"
    },
    {
      id: 2,
      name: "back-end"
    },
    {
      id: 3,
      name: "devops"
    },
    {
      id: 4,
      name: "inteligencia-artificial"
    },
    {
      id: 5,
      name: "data science"
    },
    {
      id: 6,
      name: "cloud"
    },

  ]

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <section>
        <img src="/banner.png" alt="" />
      </section>
      <FormularioDeEvento />
      <section>
        <Tema tema={temas[0]} />
      </section>
    </main>
  )
}

export default App
