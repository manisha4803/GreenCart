import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Fresh Grocery Delivered To Your Doorstep 🌿</h1>

          <p>
            Shop fresh fruits, vegetables, dairy products and daily essentials
            at the best prices.
          </p>

          <Link to="/products">
            <button className="shop-btn">Shop Now</button>
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=700"
            alt="Groceries"
          />
        </div>
      </section>

      {/* Why Choose Us */}

      <section className="features">

        <h2>Why Choose GreenCart?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            🚚
            <h3>Free Delivery</h3>
            <p>Fast and reliable doorstep delivery.</p>
          </div>

          <div className="feature-card">
            🥬
            <h3>Fresh Products</h3>
            <p>100% fresh fruits and vegetables.</p>
          </div>

          <div className="feature-card">
            🔒
            <h3>Secure Payment</h3>
            <p>Safe and trusted payment methods.</p>
          </div>

        </div>

      </section>

      {/* Featured */}

      <section className="featured">

        <h2>Featured Categories</h2>

        <div className="feature-grid">

          <div className="feature-card">
            🍎
            <h3>Fresh Fruits</h3>
          </div>

          <div className="feature-card">
            🥛
            <h3>Dairy Products</h3>
          </div>

          <div className="feature-card">
            🍞
            <h3>Bakery</h3>
          </div>

          <div className="feature-card">
            🥤
            <h3>Beverages</h3>
          </div>

        </div>

      </section>
    </>
  );
}

export default Home;