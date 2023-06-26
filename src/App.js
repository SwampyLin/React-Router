import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
// import Home from './pages/Home'
// import About from './pages/About'
import { Home, About, NotFound } from './pages'
import AlbumLayout from './pages/AlbumLayout'
import AlbumIndex from './pages/AlbumIndex'
import AlbumPhoto from './pages/AlbumPhoto'
import AlbumSearch from './pages/AlbumSearch'
// import NotFound from './pages/NotFound'

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <div className='container  mt-3'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/album' element={<AlbumLayout />}>
            <Route index element={<AlbumIndex />}></Route>
            <Route path='search' element={<AlbumSearch />}></Route>
            <Route path=':id' element={<AlbumPhoto />}></Route>
          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
