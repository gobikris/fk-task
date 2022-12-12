
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Home';
import Product from './components/Product';
import ProductInfo from './components/ProductInfo';


function App() {
  return (
    <div className=''>
          <Navbar/>
         
          <Routes>
            
            <Route path='/' element={<Product/>} />
            <Route path='/Info/:id' element={<ProductInfo/>} />
            
          </Routes>



    </div>
  );
}

export default App;
