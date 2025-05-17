import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <>
      <Navbar/>
      <main className='min-h-screen px-4 py-6 mx-auto max-w-screen-2xl font-primary'>
      <Outlet/>
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default App
