import { Product } from '@/types'
import { Link } from '@inertiajs/react'
import React from 'react'
import CurrencyFormatter from './CurrencyFormatter'

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className='card bg-base-100 shadow-xl'>
      <Link href={route('product.show', product.slug)}>
        <figure>
          <img src={product.image} alt={product.title} className='aspect-square object-cover' />
        </figure>
      </Link>

      <div className='card-body'>
        <h2 className='card-title'>{product.title}</h2>
        <p>
          by <Link href='/' className='hover:underline'>{product.user.name}</Link>&nbsp;
          in <Link href='/' className='hover:underline'>{product.department.name}</Link>
        </p>

        <div className='card-actions mt-3 justify-between items-center'>
          <button className='btn btn-primary'>Add To Cart</button>

          <span className='text-2xl'>
            <CurrencyFormatter amount={product.price} /> 
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem