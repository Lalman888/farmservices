import Headernav from '@/components/Header'
import TransportCard from '@/components/buyer/TransportCard'
import Link from 'next/link'
import React from 'react'

async function page() {
 
  return (
  
    <>
    <Headernav />
   <div className='card'>
   <div className='container py-20'>
    <div className='flex flex-col gap-5'>
     
        {
          [1,2,3,4,5,6,7,8,9,10].map((item,index)=>{
            return <TransportCard key={index} />
          }
          )

        }
      

    </div>

   </div>
   </div>
    </>
  )
}

export default page