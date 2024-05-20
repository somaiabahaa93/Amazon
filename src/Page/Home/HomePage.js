import React from 'react'
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductsContainer from '../../Components/Products/CardProductsContainer';
import NavBarLogin from '../../Components/Uitily/NavBarLogin';
import Silder from './../../Components/Home/Silder';
import DiscountSection from './../../Components/Home/DiscountSection';
import BrandFeatured from '../../Components/Brand/BrandFeatured';
import Footer from '../../Components/Uitily/Footer';
import HomeProductsHook from '../../hook/Product/HomeProductsHook';
const HomePage = () => {
    const [items]=HomeProductsHook()
    console.log("items",items)
    return (
        <div className='font' style={{ minHeight: '670px' }}>

            <Silder />
            <HomeCategory />
            <CardProductsContainer products={items} title="الاكثر مبيعا" btntitle="more" pathText="/products" />
            <DiscountSection />
            <CardProductsContainer products={items}  title="احدث الازياء" btntitle="more" pathText="/products" />
            <BrandFeatured title="اشهر الماركات" btntitle="more"  />

        </div>
    )
}

export default HomePage
