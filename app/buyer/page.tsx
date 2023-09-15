import ProductCard from '@/components/buyer/ProductCard'
import Link from 'next/link'
import React from 'react'

async function page() {
 
  return (
  
    <>
   <div className='container py-20'>
    <div className='grid grid-cols-3 gap-5'>
     
        {
          [1,2,3,4,5,6,7,8,9,10].map((item,index)=>{
            return <ProductCard key={index} />
          }
          )

        }
      

    </div>

   </div>
    </>
  )
}

export default page