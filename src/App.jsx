import './App.css'
import { Banner } from './components/Banner'
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
      <Banner />
      <FormularioDeEvento />
      {temas.map((tema) => (
        <section key={tema.id}>
          <Tema tema={tema} />
        </section>
      ))}
      
    </main>
  )
}

export default App
