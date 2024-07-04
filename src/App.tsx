import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LayoutPage from './components/Layout';
import Login from './components/Login';
import ProductPage from './components/ProductPage';
import Checking from './components/Checking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPage />}>
          <Route index element={<ProductPage />} />
          <Route path='/checking' element={<Checking />} />
        </Route>
        <Route path='/login'  element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
