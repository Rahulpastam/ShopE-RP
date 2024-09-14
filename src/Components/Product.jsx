import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsList } from "../utils/ProductsList";
import { CartContext } from "../utils/CartContext";

const Product = () => {
  const { productId } = useParams();
  const {addToCart} = useContext(CartContext);

  const product = ProductsList.find((item) => item.id === productId);
  console.log(productId)
  console.log(product)
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <>
      <div className="product-detail">
        <div>
        <img
          src={product.image}
          alt={product.name}
          className="product-detail-image"
        />
        </div>
        <div>
        <h1>{product.name}</h1>
        <p className="product-price">Price:  ₹ {(product.priceCents)}</p>
        <div className="product-rating-container">
            <img className="product-rating-stars"
              src={`/ratings/rating-${product.rating.stars * 10}.png`}
              alt={product.name}/>
            <div className="product-rating-count link-primary">
      {product.rating.count}
            </div>
          </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          consequatur enim quae ab cum a sint doloribus, possimus, dignissimos
          veritatis reprehenderit accusamus porro, molestiae aliquam quia
          recusandae ex quo animi voluptate. Nisi quasi, placeat quod eius odio
          laudantium qui a, et aspernatur suscipit aliquam iste vel
          reprehenderit officiis sit praesentium?
        </p>
        <div className="card-buttons" >
            <button className="addtoCartB" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Product;
