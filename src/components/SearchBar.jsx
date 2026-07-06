import { useDispatch } from "react-redux";
import { setSearch } from "../redux/ProductSlice";

function SearchBar() {
  const dispatch = useDispatch();

  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search products..."
      onChange={(e) => dispatch(setSearch(e.target.value))}
    />
  );
}

export default SearchBar;