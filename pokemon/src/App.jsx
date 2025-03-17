import Navbar from './Nav/navbar.jsx';
import Pokemones from './Pokemones/pokemones.jsx';
import Form from './components/Form/form.jsx';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path='/' element= {<Pokemones/>}/>
            <Route path='/Registrodex' element= {<Form/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )}
export default App
