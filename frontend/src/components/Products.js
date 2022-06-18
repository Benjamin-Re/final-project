import React, { useEffect } from "react";
import { Card } from "./Card";
import css from './products.css';


export function Products() {

useEffect(()=> {
  fetch(`http://localhost:8000/products`)
  .then(res => res.json())
  .then(data => {console.log(data)})
}, [])

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
