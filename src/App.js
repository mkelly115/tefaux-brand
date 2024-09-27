import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App;
