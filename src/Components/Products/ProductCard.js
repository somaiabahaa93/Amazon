import React, { useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import favoff from "../../images/fav-off.png";
import favoon from "../../images/fav-on.png";
import { useState } from "react";
import rate from "../../images/rate.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToWishList,
  getAllUserWIshList,
  removeProductFromWishList,
} from "../../Redux/actions/wishListActions";

const ProductCard = ({ item, FavProductsIds }) => {
  const [img, setImg] = useState(favoff);
  const [loading, setLoading] = useState(true);

  const resAll = useSelector((state) => state.wishListReducer.allWishList);
  let Fav;
  if (FavProductsIds !== undefined) {
    Fav = FavProductsIds.some((fav) => fav === item._id);
  }
  const [isFav, setIsFav] = useState(Fav);

  // console.log("fav", FavProductsIds);
  const handleImg = () => {
    if (isFav) {
      removeProFromFav();
    } else {
      addProToFav();
    }
  };


  useEffect(() => {
    setIsFav(FavProductsIds?.some(fitem => fitem === item._id))
}, [FavProductsIds])

  useEffect(() => {
    console.log("sommmmme", isFav);
    if (isFav === true) {
      setImg(favoon);
    } else {
      setImg(favoff);
    }
  }, [isFav]);

  const dispatch = useDispatch();
  const resAdd = useSelector((state) => state.wishListReducer.addWishList);
  const resRemove = useSelector(
    (state) => state.wishListReducer.removeWishList
  );

  const addProToFav = async () => {
    setImg(favoon);
    setIsFav(true);

    await dispatch(
      addProductToWishList({
        productId: item._id,
      })
    );
  };

  const removeProFromFav = async () => {
    setImg(favoff);
    setIsFav(false);

    await dispatch(removeProductFromWishList(item._id));
  };

  // useEffect(()=>{
  //   if(loading===false)
  //   console.log("wish",resAdd)
  // },[loading])
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "345px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}
      >
        <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
          <Card.Img
            style={{ height: "228px", width: "100%" }}
            src={item.imageCover}
          />
        </Link>
        <div className="d-flex justify-content-end mx-2">
          <img
            onClick={handleImg}
            src={img}
            alt=""
            className="text-center"
            style={{
              height: "24px",
              width: "26px",
            }}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <div className="card-title">{item.title} </div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">{item.ratingQuantitiy}</div>
              </div>
              <div className="d-flex">
                <div className="card-price">
              
                {item.priceAfterDiscount?
                (<div><span style={{textDecoration:"line-through"}}> ({item.price})</span>({item.priceAfterDiscount})</div>):  (item.price)}
                </div>
                <div className="card-currency mx-1">جنيه</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
