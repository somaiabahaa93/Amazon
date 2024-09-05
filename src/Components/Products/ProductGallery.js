import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from '../../images/mobile.png'
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import { useParams } from 'react-router-dom';
import ViewProductDetailsHook from '../../hook/Product/ViewProductDetailsHook';
const ProductGallery = () => {
    const {id}=useParams()
    const [item,imageCover,images,cat,proBrand,prods]=ViewProductDetailsHook(id)
   console.log("cooooover",imageCover)
   console.log("coooooverssssssssssssssssssssss",images)

    // const images = [
    //     {
    //         original: `${mobile}`,
    //     },
    //     {
    //         original: `${mobile}`,
    //     },
    //     {
    //         original: `${mobile}`,
    //     },
    // ];
    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2">
            {images?( <ImageGallery items={images}
                defaultImage={mobile}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />):null}
           
        </div>
    )
}

export default ProductGallery
