//props passed into components
export function ProductCard(props){
   
    return (
      <article style={{ width:'100%',border: "1px solid white", padding: "10px", width: "200px",textalign:"center"}}>
        <h2>{props.product.name}</h2>
        <img  
          src={props.product.image}
          alt={props.product.name}
          width="180"
          height="180"
        />
        <p> specification</p>
        <ul>
  
          <li> {props.product.specifications[0]}</li>
          <li> {props.product.specifications[1]}</li>
          <li>  {props.product.specifications[2]}</li>
          <li>  {props.product.specifications[3]}</li>
          <li>  {props.product.specifications[4]}</li>
          <li>  {props.product.specifications[5]}</li>
          <li>  {props.product.specifications[6]}</li>
        </ul>
        <button>Buy (From ${props.product.price})</button>
      </article>
    )
  }