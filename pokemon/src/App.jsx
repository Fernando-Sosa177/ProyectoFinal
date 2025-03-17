import Navbar from './navbar/navbar.jsx';
import Pokemones from './pokemones/pokemones.jsx';
import Contacto from './contacto.jsx';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
            <Route path='/' element= {<Navbar/>}/>
            <Route path='/Contacto' element= {<Contacto/>} />
        </Routes>
        <Navbar/>
        <Pokemones/>

      </BrowserRouter>
    </>
  )}
export default App
