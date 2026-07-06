import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../Services/api";
import {
  setLoading,
  setProducts,
  setError,
} from "../redux/ProductSlice";

import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

function Products() {
  const dispatch = useDispatch();

  const {
    products,
    loading,
    error,
    search,
    category,
  } = useSelector((state) => state.products);

  useEffect(() => {
    const fetchProducts = async () => {
      dispatch(setLoading(true));

      try {
        const response = await getProducts();
        dispatch(setProducts(response.data.products));
      } catch {
        dispatch(setError("Failed to load products"));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchProducts();
  }, [dispatch]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (loading) return <Loader />;

  if (error)
    return <h2 style={{ textAlign: "center" }}>{error}</h2>;

  return (
    <div className="products-container">

      <h1>Fresh Groceries</h1>

      <div className="filter-container">
        <SearchBar />
        <CategoryFilter />
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
}

export default Products;