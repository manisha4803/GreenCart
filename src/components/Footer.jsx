import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div>
          <h2>🌿 GreenCart</h2>
          <p>Fresh groceries delivered with care.</p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <Link to="/">Home</Link><br />
          <Link to="/products">Products</Link><br />
          <Link to="/cart">Cart</Link>
        </div>

        <div>
          <h3>Contact</h3>

          <p>📧 support@greencart.com</p>
          <p>📞 +91 98765 43210</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 GreenCart. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;