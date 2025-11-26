import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'
import { TbTrash } from 'react-icons/tb'

const CartContents = () => {
    const cartProducts =[
        {
            productId: 1,
            name : "Slim-Fit Easy-Iron Shirt",
            size : "L",
            color : "White",
            quantity : 5,
            price : 15,
            image : "https://picsum.photos/200?random=1"
        },
        {
            productId: 2,
            name : "Track Pants",
            size : "L",
            color : "Blue",
            quantity : 1,
            price : 15,
            image : "https://picsum.photos/200?random=2"
        }
    ]

  return (
    <div>
        {cartProducts.map((product, index) => (
            <div key ={index} className='border-b flex justify-between py-4 items-start'>
                <div className='flex items-start'>
                    {/* Image */}
                    <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4 rounded'/>

                    {/* Center Content */}
                    <div>
                        <h3>{product.name}</h3>
                        <p className='text-sm text-gray-500'>
                            size: {product.size} | color: {product.color}
                        </p>

                        {/* Increament and Decrement Product Quantity */}
                        <div className='flex items-center mt-2 gap-2'>
                            <button className='text-xl border rounded px-2 py-1 font-medium border-gray-300 hover:border-gray-700 hover:cursor-pointer'>-</button>
                            <span>{product.quantity}</span>
                            <button className='text-xl border rounded font-medium px-2 py-1 border-gray-300 hover:border-gray-700 hover:cursor-pointer'>+</button>
                        </div>
                    </div>
                </div>

                {/* Price and delete */}
                <div>
                    <p className='font-bold'>${product.price.toLocaleString()}</p>
                    <button><RiDeleteBin3Line className='h-6 w-6 mt-2 text-red-600'/></button>
                </div>

            </div>
        ))}
    </div>
  )
}

export default CartContents