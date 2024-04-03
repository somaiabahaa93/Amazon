import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllBrands } from "../../Redux/actions/brandActions";
const HomeBrandHook = () => {
    const brands = useSelector((state) => state.allBrand.brands);
    const loading = useSelector((state) => state.allBrand.loading);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllBrands(5));
    }, []);
  console.log("brands",brands)
  console.log("lo",loading)
  return [brands,loading]
}

export default HomeBrandHook
