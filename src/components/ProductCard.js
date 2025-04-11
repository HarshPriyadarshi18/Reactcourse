export function ProductCard({ product, backgroundColor = "slategray" }) {
  function handleClick(product) {
    alert(`You clicked on ${product.name} whose cost is $${product.price}`);
  }

  return (
    <article
      style={{
        backgroundColor,
        border: "1px solid white",
        padding: "10px",
        width: "200px",
        textAlign: "center",
        borderRadius: "8px",
        color: "white"
      }}
    >
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        width="180"
        height="180"
        style={{ borderRadius: "6px" }}
      />
      <p>Specifications:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "1rem", textAlign: "left" }}>
        {product.specifications.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
      <Status stockCount={product.stockCount} />
      {product.stockCount>0 && <button
        onClick={() => handleClick(product)}
        style={{
          marginTop: "10px",
          padding: "8px 12px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#fff",
          color: backgroundColor,
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
      
        Buy (From ${product.price})
      </button>}
    </article>
  );
}

function Status({stockCount}) {
  return (
    <div style={{ marginTop: "10px" }}>
      {stockCount > 0 ? (
        <span style={{ color: "green" }}>In Stock</span>
      ) : (
        <span style={{ color: "red" }}>Out of Stock</span>
      )}
    </div>
  );
}