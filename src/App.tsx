import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss'
import Homepage from './Pages/Homepage';
import Produtos from './Pages/Produtos';
import Contato from './Pages/Contato';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ProdutoDetalhe from './Pages/ProdutoDetalhe';
import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Carrinho from './Pages/Carrinho';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/produtos' element={<Produtos />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/produto/:id' element={<ProdutoDetalhe />} />
          <Route path='/login' element={<Login /> }></Route>
          <Route path='/cadastro' element={<Cadastro />}></Route>
          <Route path='/carrinho' element={<Carrinho />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;