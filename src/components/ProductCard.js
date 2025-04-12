import './productCard.css';

export function ProductCard({ product, background = "slategray" }) {
  function handleClick(product) {
    alert(`You clicked on ${product.name} whose cost is $${product.price}`);
  }

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
      <p>Specifications:</p>
      <ul className="list">
        {product.specifications.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
      <Status stockCount={product.stockCount} />
      {product.stockCount > 0 && (
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
      {stockCount > 0 ? (
        <span className="availaiblestatus">In Stock</span>
      ) : (
        <span className="notavailablestatus">Out of Stock</span>
      )}
    </div>
  );
}

