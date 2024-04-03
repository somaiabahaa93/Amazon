import  { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../Redux/actions/categoryActions";
const AllCategoryPageHook = () => {
    const categories = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  const dispatch = useDispatch();
  const colors = ["#ffd3e8", "#f4dba5", "#55cfdf", "#0034ff", "#ffd3e8"];
  useEffect(() => {
    dispatch(getAllCategory(10));
  }, []);
  console.log("ddddd", categories);
  let pageCount = 0;
  if (categories.paginationResult)
    pageCount = categories.paginationResult.numberOfPages;
  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));

    console.log("page", page);
  };
 return [categories,loading,pageCount,getPage]
}

export default AllCategoryPageHook
