import './App.css';
import CreateAccount from './pages/CreateAccount';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login';
import { AppContainer, Item, Nav } from './App';
import { useState } from 'react';

function App() {
  const [navigate, setNavigate] = useState([
    { active: false, to: '/create', label: 'Create Account' },
    { active: true, to: '/', label: 'Login' }
  ])

  const handleNavigate = (label: string) => {
    setNavigate(previous => {
      return [...previous.map(prev => {
        label === prev.label ? prev.active = true : prev.active = false;
        return prev
      })]
    })
  }

  return (
    <AppContainer>
      <Router>
        <Nav>
          {navigate.map(nav => {
            return <Item isActive={nav.active} onClick={() => { handleNavigate(nav.label) }} to={nav.to}>{nav.label}</Item>
          })}
        </Nav>
        <Routes>
          <Route path={'/create'} element={<CreateAccount />} />
          <Route path={'/'} element={<Login />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
