import { Routes, Route } from'react-router-dom'
import Home from './components/Home'
import TvShows from './components/TvShows'
import Movies from './components/Movies'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tv' element={<TvShows />} />
        <Route path='/movie' element={<Movies />} />
      </Routes>
    </>
  )
}

export default App
