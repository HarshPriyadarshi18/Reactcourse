//props passed into components
export function ProductCard({product,backgroundColor="slategray"}) {
   function handleclick() {
    alert(`You clicked on ${product.name} whose cost is ${product.price}`);
  }
    return (
      <article style={{backgroundColor, width:'100%',border: "1px solid white", padding: "10px", width: "200px",textalign:"center"}}>
        <h2>{product.name}</h2>
        <img  
          src={product.image}
          alt={product.name}
          width="180"
          height="180"
        />
        <p> specification</p>
        <ul>    
          <li> {product.specifications[0]}</li>
          <li> {product.specifications[1]}</li>
          <li>  {product.specifications[2]}</li>
          <li>  {product.specifications[3]}</li>
          <li>  {product.specifications[4]}</li>
          <li>  {product.specifications[5]}</li>
          <li>  {product.specifications[6]}</li>
        </ul>
        <button onClick={()=>handleclick(product)}>Buy (From ${product.price})</button>
      </article>
    )
  }