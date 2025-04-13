import './productCard.css';
import { useState } from 'react';
export function ProductCard({ product, background = "slategray" }) {
  const[stockCount, setStockCount] = useState(product.stockCount);
  //let stockCount = product.stockCount;
   const[showMore, setShowMore] = useState(false);  

  const handleClick = (product) => {
    setStockCount(stockCount - 1);
    //stockCount--;
    console.log('stockCount', stockCount);
    alert(`You clicked on ${product.name} whose cost is $${product.price}`);
  };

  return (
    <article className="Container" style={{ backgroundColor: background }}>
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        width="180"
        height="180"
        style={{ borderRadius: "6px" }}
      />
      <p>Specifications:{' '}
        <button onClick={() => setShowMore(!showMore)} className="button">
          {showMore ? "Show Less" : "Show More"}
        </button>
      </p>
     {showMore&&<ul className="list">
        {product.specifications.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>} 
      <Status stockCount={stockCount} />
      {stockCount > 0 && (
        <button
          onClick={() => handleClick(product)}
          className="button"
          style={{ color: background }}
        >
          Buy (From ${product.price})
        </button>
      )}
    </article>
  );
}

function Status({ stockCount }) {
  return (
    <div>
      <span className={stockCount > 0 ? "availablestatus" : "notavailablestatus"}>
        {stockCount > 0 ? `${stockCount} items available` : "Out of Stock"}
      </span>
    </div>
  );
}
