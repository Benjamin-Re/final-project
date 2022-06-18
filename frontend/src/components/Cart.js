import { useGetCart } from "../Context";

export function Cart() {
  const getCart = useGetCart(); // This gets the cart state, so ...
  const products = getCart; // get cart is not a function but a variable

  return (
    <>
      <h2>Cart</h2>
      <ul>
      {products.map(product => {
        return (
            <li>
                {product.name}, {product.price}
            </li>
        )
      })}
      </ul>
      <button onClick={handleCheckout}>Checkout</button>
    </>
  );
  
  function handleCheckout(){
      /* Many things:
      check if user logged in
      if so send
          put request to update products in db
          send post request to update orders in db
          get request to get the order and display order confirmation*/
      
      // For now console log the order
      console.log(products);   
  }
}

