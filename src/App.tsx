import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Homepage from './Pages/Homepage';
import Produtos from './Pages/Produtos';
import Contato from './Pages/Contato';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/produtos' element={<Produtos />} />
          <Route path='/contato' element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;