import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';  
import './App.css';
const product = {
  name: "iPhone Pro max 15",
  price: 999,
  image: "/images/iphone.jpeg",
  specifications: [
    "6.7 inch display",
    "48 MP camera",
    "5G support",
    "A17 chip",
    "1TB storage",
    "8GB RAM",
    "5000 mAh battery"
  ]
};

function App() {
  return (
    <div className="App">
  <ProductList>
     <ProductCard product={product}/>
     <ProductCard product={product}/>
     <ProductCard product={product}/>
     </ProductList>
    </div>
  );
}

export default App;

