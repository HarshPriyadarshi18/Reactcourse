import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';  
import './App.css';

const products =[{
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
},
{
  name: "Samsung Galaxy S23 Ultra",
  price: 1199,
  image: "/images/samsung-galaxy-s23-plus-5g-lavender-smart-phone.jpg",
  specifications: [
    "6.8 inch display",
    "200 MP camera",
    "5G support",
    "Snapdragon 8 Gen 2",
    "1TB storage",
    "12GB RAM",
    "5000 mAh battery"
  ]
},
{
  name: "Google Pixel 8 Pro",
  price: 999,
  image: "/images/download.jpeg",
  specifications: [
    "6.7 inch display",
    "50 MP camera",
    "5G support",
    "Google Tensor G3",
    "512GB storage",
    "12GB RAM",
    "5000 mAh battery"
  ]
}
];
function handleclick(product) {
  alert(`You clicked on ${product.name} whose cost is ${product.price}`);
}
function App() {
  return (
    <div className="App">
  <ProductList>
    {products.map((product) => (
      <ProductCard product={product} onClick={handleclick} />
    ))}
     <ProductCard backgroundColor='darkolivegreen' product={products[0]} onClick={handleclick}/>
     <ProductCard product={products[1]} onClick={handleclick}/>
     <ProductCard backgroundColor='peru'product={products[2]} onClick={handleclick}/>
     </ProductList>
    </div>
  );
}

export default App;

