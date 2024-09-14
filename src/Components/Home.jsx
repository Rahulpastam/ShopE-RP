
import { ProductsList } from "../utils/ProductsList";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../utils/CartContext";
import { useContext } from "react";

const Home = () => {

  const {addToCart} = useContext(CartContext);


  const navigate = useNavigate();
  const viewProduct = (productId) => {
    // console.log(productId);
    navigate(`/product/${productId}`)
  }

  return (
    <div className="products-container">
      {ProductsList.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="img-container">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </div>
          <div className="disc">
            <h3>{product.name}</h3>
            <p className="product-price">Price:  ₹ {(product.priceCents)}</p>
          </div>
          <div className="card-buttons" >
            <button className="addtoCartB" onClick={() => addToCart(product)}>Add to Cart</button>
            <button className="toview addtoCartB" onClick={()=> {viewProduct(product.id)}}>View</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
