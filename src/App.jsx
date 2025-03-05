import Home from './Home'
import Detail from './Detail'
import { Routes, Route} from 'react-router-dom';



function App() {

  return (
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  )
}

export default App
