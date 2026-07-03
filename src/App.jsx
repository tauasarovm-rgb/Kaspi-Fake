import { useState } from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'

export default function App() {
  const [page, setPage] = useState('login')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const handleLogin = () => {
    setIsLoggedIn(true)
    setPage('home')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setPage('login')
  }

  const navigateTo = (newPage, service = null) => {
    if (service) {
      setSelectedService(service)
    }
    setPage(newPage)
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  if (page === 'home') {
    return <Home onNavigate={navigateTo} onLogout={handleLogout} />
  }

  if (page === 'services') {
    return <Services onNavigate={navigateTo} onBack={() => setPage('home')} />
  }

  if (page === 'service-detail' && selectedService) {
    return <ServiceDetail service={selectedService} onBack={() => setPage('services')} />
  }

  return <Home onNavigate={navigateTo} onLogout={handleLogout} />
}