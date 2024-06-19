import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, getProducts } from "@redux/reducers/dashboardSlice";
import { addToCart } from "@redux/reducers/cartSlice";
import { FaShoppingCart } from "react-icons/fa";
import { Badge, Button, Grid, Row, Col} from 'rsuite';
import { getProductsInCart } from "@redux/reducers/cartSlice";
import CartModal from "./cartModal";

export default function Dashboard() {
  const dispatch = useDispatch();
  const productList = useSelector(getProducts);
  const productsInCart = useSelector(getProductsInCart);

  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  return (
    <div>
      <div>
        <h2>Dashboard</h2>
        {
          productsInCart?.length ? (
            <Badge content={productsInCart?.length}>
              <FaShoppingCart onClick= {()=>{ setShowCartModal(true) }}/>
            </Badge>
          ) : (<FaShoppingCart onClick= {()=>{ setShowCartModal(true) }}/>)
        }
      </div>
      <Grid fluid>
        <Row className="show-grid">
          {
            productList.map((product)=>{
              return (
                <Col xs={6} key={product.id}>
                  <div>
                    <p>{product.title}</p>
                    <img src={product.image} style={{ width: 100, height: 100 }}/>
                    <div>
                      <Button
                        appearance="primary"
                        onClick={() => {dispatch(addToCart(product))}}
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Grid>
      <CartModal
        open={showCartModal}
        handleClose={()=> { setShowCartModal(prev => !prev)}}
      />
    </div>
  );
}
