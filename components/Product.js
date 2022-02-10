import Image from "next/image"
import { useState } from "react"
import {StarIcon} from "@heroicons/react/solid";
import CurrencyFormat from 'react-currency-format';
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
const MAX_RATING = 5 ; 
const MIN_RATING = 1 ; 

function Product({id , title , price , description , category , image}) {
  const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) ) + MIN_RATING );
  const [hasPrime] = useState(Math.random() < 0.5)
  const dispatch = useDispatch()
   function addItemToBasket () {
     const product = {
      id , 
      title 
      , price
       , description 
       , category 
       , image
       , hasPrime 
       , rating
     };
     dispatch(addToBasket(product))
   }
 
 
 
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3 ">{title}</h4>
      <div className="flex">
      {Array(rating).fill().map((_ , i) => {
        return <StarIcon className="h-5 text-yellow-500" />
      })}
     
      </div>
     
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
      <CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
      </div>
       {hasPrime &&(
           <div className="flex items-center space-x-2 -mt-3 mb-3">
           <img className="w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_Prime_Logo.svg/1200px-Amazon_Prime_Logo.svg.png" alt="" />
           <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
           </div>

       )}
       <button onClick={addItemToBasket}  className="mt-auto button"> Add to Basket</button>
    </div>
  )
}

export default Product
