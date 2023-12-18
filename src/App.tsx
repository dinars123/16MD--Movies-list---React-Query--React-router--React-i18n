import './App.css'
import HomeWorkInfo from './pages/homeworkInfo/homeworkinfo';
import MoviesList from './pages/moviesList/movies';
import AboutAuthor from './pages/aboutAuthor/aboutAuthor';
import MovieId from './pages/movieId/movieId';
import NoMatch from './pages/noMatch/noMatch';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
  <BrowserRouter>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<HomeWorkInfo />} />
            <Route path='/homeworkinfo' element={<HomeWorkInfo />} />
            <Route path='/movieslist' element={<MoviesList />} />
            <Route path='/aboutauthor' element={<AboutAuthor />} />
            <Route path='/movieslist/:id' element={<MovieId />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    )
}

export default App
