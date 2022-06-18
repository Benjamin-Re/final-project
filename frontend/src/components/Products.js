import { Card } from "./Card";
import css from './products.css';


export function Products() {

  return (
    <>
      <h2>Products</h2>
      <div className="products-container">
        <Card id="1" name="chair" price="99€"></Card>
        <Card id="2" name="table" price="299€"></Card>
       
      </div>
    </>
  );
}
