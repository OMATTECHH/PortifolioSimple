import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Index.jsx'
import './index.css'
import Apresentacao from './Pages/Index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<Home/>}/>
      <Route path='/apresentacao' element={<Apresentacao/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
