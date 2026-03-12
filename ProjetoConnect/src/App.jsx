import Header from './components/Header'
import './App.css'
import Catalogo from './components/Catalogo'
import SecaoPrincipal from './components/SecaoPrincipal'
import Faq from './components/Faq'
import Sobre from './components/Sobre'
import Contato from './components/Contato'
import Footer from './components/Footer'
import Whatsapp from './components/whatsapp'

function App() {
  return (

      <div>
        <Header/>
        <SecaoPrincipal/>
        <Catalogo/>
        <Sobre />
        <Faq />
        <Contato/>
        <Footer/>
        <Whatsapp/>
      </div>

  )
}

export default App
