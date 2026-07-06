import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

function ProductDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>;
  }

  return (
    <div className="details-container">

      <div className="details-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="details-info">

        <h1>{product.title}</h1>

        <p className="category">{product.category}</p>

        <h2>${product.price}</h2>

        <p>{product.description}</p>

        <button
          className="shop-btn"
          onClick={() => dispatch(addToCart(product))}
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductDetail;