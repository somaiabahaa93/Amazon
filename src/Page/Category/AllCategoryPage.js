import React from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Uitily/Pagination";

import AllCategoryPageHook from "../../hook/Category/AllCategoryPageHook";

const AllCategoryPage = () => {
  const [categories,loading,pageCount,getPage]= AllCategoryPageHook()

  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer categories={categories} loading={loading} />
      {pageCount > 1 ? (
        <Pagination onPress={getPage} pageCount={pageCount} />
      ) : null}
    </div>
  );
};

export default AllCategoryPage;
