import { useDispatch } from "react-redux";
import { setCategory } from "../redux/ProductSlice";

function CategoryFilter() {
  const dispatch = useDispatch();

  return (
    <select
      className="category-filter"
      onChange={(e) => dispatch(setCategory(e.target.value))}
    >
      <option value="all">All</option>
      <option value="groceries">Groceries</option>
      <option value="beverages">Beverages</option>
    </select>
  );
}

export default CategoryFilter;