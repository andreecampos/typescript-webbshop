import { Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage'
import './App.css';
import { ProductDetail } from './pages/ProductDetail';


function App() {
  return (
    <div className="App">

      <Routes>

        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/details/:id" element={<ProductDetail  />}></Route>

        
      </Routes> 

    </div>
  );
}

export default App;
 