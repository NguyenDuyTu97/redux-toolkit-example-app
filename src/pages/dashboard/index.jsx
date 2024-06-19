import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, getProducts } from "../../redux/reducers/dashboardSlice";
import { addToCart } from "../../redux/reducers/cartSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const productList = useSelector(getProducts);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  return (
    <div>
      <h2>Dashboard</h2>
      {
        productList.map((product)=>{
          return (
            <div>
              {product.title}
              <button onClick={() => {dispatch(addToCart(product))}}>Add</button>
            </div>
          )
        })
      }
    </div>
  );
}
