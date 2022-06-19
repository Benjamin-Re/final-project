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
                {product.name}, {product.price}€
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
      
      // Process the order
      let order = {
        "ordernr": 111,
        "products": products,
        "total": products.reduce((total, current) => {return total+= current.price}, 0),
        "customer": "Leopoldina"
      }
      console.log(order);
      fetch('http://localhost:8000/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      }).then(res => {
        return res.json()
      }).then(data => console.log(data))
      .catch(error => console.log(error))
  }
}

