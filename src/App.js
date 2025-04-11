import { Fragment } from 'react';
import { ProductCard } from './components/ProductCard';
import { ProductList } from './components/ProductList';  
import './App.css';

const products = [
  {
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
    ],
    stockCount: 10,
    backgroundColor: 'darkolivegreen'
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
    ],
    stockCount: 5,
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
    ],
    stockCount: 0,
    backgroundColor: 'peru'
  }
];

function App() {
  return (
    <div className="App">
      <ProductList>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            backgroundColor={product.backgroundColor}
          />
        ))}
      </ProductList>
      <h2>Products which costs upto $1000</h2>
      <ul>
        {products
          .filter(product => product.price <= 1000)
          .map((product, index) => (
            <Fragment key={index}>
            <hr/>
            <p>
              {product.name} - ${product.price}
            </p>
            </Fragment>
          ))}
      </ul>
    </div>
  );
}

export default App;
