import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTiltle from "../Uitily/SubTiltle";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getAllUserWIshList } from "../../Redux/actions/wishListActions";

const CardProductsContainer = ({ title, btntitle, pathText, products }) => {
    const [loading, setLoading] = useState(true);

    const resAll = useSelector((state) => state.wishListReducer.allWishList);
    const dispatch = useDispatch();

    useEffect(()=>{
      getAll()
    },[])
    // get all user wishlist 
  const getAll=async()=>{
    setLoading(true)
    await dispatch(getAllUserWIshList())
    setLoading(false)
  }
//   console.log("allWish",resAll)
  let FavProductsIds;
  if(resAll && resAll.data)
 
  FavProductsIds= resAll.data.map((fav)=>fav._id)
 console.log("allWishId",FavProductsIds)
  return (
    <Container>
      <SubTiltle title={title} btntitle={btntitle} pathText={pathText} />
      <Row className="my-2 d-flex justify-content-between">
        {products?
           products.map((item, index) => {
            return (
              <ProductCard FavProductsIds={FavProductsIds} key={index} item={item} />

            )
        }
          )
          : null}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
