import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

function ProductCard({ product }) {

  const dispatch = useDispatch();

  return (
    <div className="product-card">

      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <span className="category">
        {product.category}
      </span>

      <h3>{product.title}</h3>

      <p className="price">
        ${product.price}
      </p>

      <button
        className="product-btn"
        onClick={() => dispatch(addToCart(product))}
      >
        Add To Cart
      </button>

      <Link to={`/product/${product.id}`}>
        <button
          className="details-btn"
        >
          View Details
        </button>
      </Link>

    </div>
  );
}

export default ProductCard;