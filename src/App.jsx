import './App.css'
import Create from './components/Create'
import Read from './components/Read'
import Update from './components/Update'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'

export default function App() {
  

  return (

    
    <div className="main">
        <h2 className="main-header">React PhoneBook</h2>
        <div>
          <Routes>
            <Route path='/' element={<Layout />}/>
              <Route path='/create' element={<Create />} />
              <Route path='/read' element={<Read />} />
              <Route path='/update' element={<Update />} />
          </Routes> 
        </div>
      </div>
    

  )
}