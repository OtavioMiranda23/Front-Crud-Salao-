
import { useState } from "react"
import Aside from "./components/aside"
import Header from "./components/header"
import Main from "./components/main"
import { Navbar } from "./components/navBar"
import { GlobalStyle } from "./styles/global"
import { Wrapper } from "./styles/wrapper"
import { ModalForm } from "./components/modalForm"



function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(prev => !prev);
  }


  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Wrapper>
      <Navbar/>
      <Main/>
      <Aside/>
      {isModalOpen && <ModalForm/>}
      <button onClick={handleModalOpen}>Novo Lembrete</button>
    </Wrapper>
    </>

    
  )
}

export default App
