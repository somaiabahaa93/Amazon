import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer'
import Pagination from '../../Components/Uitily/Pagination'
import AllBrandPageHook from '../../hook/Brand/AllBrandPageHook'
const AllBrand = () => {
const [brands,loading,getPage,pageCount]=AllBrandPageHook()
    return (
        <div style={{minHeight:'670px'}}>
            <BrandContainer brands={brands} loading={loading} />
            <Pagination onPress={getPage} pageCount={pageCount} />
        </div>
    )
}

export default AllBrand
