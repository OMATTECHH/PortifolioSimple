import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Index from './Pages/Index.jsx';
import Home from './Components/Home/Index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter  basename="/PortifolioSimple">
    <Routes>
      <Route path='/*' element={<Home/>}/>
      <Route path='/info' element={<Index/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
