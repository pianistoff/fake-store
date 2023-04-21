import { useSelector } from "react-redux";
import {
  selectAllProductsStatus,
  selectAllProductsData,
} from "../common/allProductsSlice";

function Products() {
  const allProductsStatus = useSelector(selectAllProductsStatus);
  const allProductsData = useSelector(selectAllProductsData);
  return <div>Products</div>;
}

export default Products;
