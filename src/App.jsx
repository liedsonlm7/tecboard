import './App.css'
import { Banner } from './components/Banner'
import { CardEvento } from './components/CardEvento'
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

  const eventos = [
    {
      capa: "https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png",
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
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
          <CardEvento evento={eventos[0]}/>
        </section>
      ))}
      
    </main>
  )
}

export default App
