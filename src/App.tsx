import { Route } from 'react-router'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Error404, HomePage, LoginPage } from './pages'
import ServiceProvider from './context/ServiceProvider'
import RedirectTo from './components/RedirectTo'
import { ReactNode } from 'react'

function App() {
  return (
    <ServiceProvider>
      <BrowserRouter>
        <Routes>
          {/* Admin Panel */}
          <Route index element={IsLogged(<HomePage />)} />
          
          {/* Attrape con */}
          <Route path='/Login' element={<LoginPage />} />

          <Route path='*' element={IsLogged(<Error404/>)} />
        </Routes>
      </BrowserRouter>
    </ServiceProvider>
  )
}

function IsLogged(components: ReactNode) {
  return sessionStorage.getItem("session") ? components : <RedirectTo path='/Login' />;
}

export default App
