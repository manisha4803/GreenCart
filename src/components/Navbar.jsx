import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <nav className="navbar">
      <div className="logo">🌿 GreenCart</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        <li><Link to="/products">Products</Link></li>

        <li>
          <Link to="/cart">
            Cart ({cartItems.length})
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;