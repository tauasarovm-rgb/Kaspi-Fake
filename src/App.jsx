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
    console.log('Navigate to:', newPage, service)
    if (service) {
      setSelectedService(service)
      setPage('service-detail')
    } else {
      setPage(newPage)
    }
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  if (page === 'service-detail') {
    return <ServiceDetail service={selectedService} onBack={() => setPage('services')} />
  }

  if (page === 'services') {
    return <Services onNavigate={navigateTo} onBack={() => setPage('home')} />
  }

  return <Home onNavigate={navigateTo} onLogout={handleLogout} />
}
