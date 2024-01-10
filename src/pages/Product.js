import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../components/breadcrumbs/BreadCrum'
import ProductDisplay from '../components/productdisplay/ProductDisplay'
import DescriptionBox from '../components/Descriptionbox/DescriptionBox'
import RelatedProduct from '../components/RelatedProducts/RelatedProduct'

const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
        <BreadCrum product={product}/>
        <ProductDisplay product={product}></ProductDisplay>
        <DescriptionBox/>
        <RelatedProduct/>
    </div>
  )
}

export default Product