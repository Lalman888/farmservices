import React from 'react'
import Image from 'next/image'
import { BsChevronRight } from 'react-icons/bs'
import { Icons } from '@/components/icons'
import SellerForm from '@/components/seller/SellerForm'
function page() {
  return (
    <>
    <div >
    <section className="relative h-[90vh] bg-emerald-800 ">
        <div className="absolute inset-0">
          {/* <Image
            src="/supplier/hero_b.png"
            width={500}
            height={228}
            alt="Hero"
          /> */}
        </div>
        <div className="container">
          <div className="flex justify-between pt-16">
            <div>
              {/* <p className="text-xs text-secondary-foreground">
                Home <BsChevronRight size={12} className="inline-block" />{" "}
                <span className="text-primary">Supplier</span>
              </p> */}
            </div>
            {/* <div className="inline-flex items-center rounded-full bg-white p-1">
              <span className="px-4 py-2 text-sm font-semibold text-secondary-foreground">
                Buyer
              </span>
              <span className="rounded-full bg-primary px-4 py-2 font-semibold text-white">
                Seller
              </span>
            </div> */}
          </div>
          <div className="mt-40 flex items-center justify-between">
            <div>
              <h3 className="inline-flex text-lg text-primary">
                Sell your Crops at{" "}
                <span className="ml-1 text-white">Grain</span>
                <span className="mr-4 text-white">Nexus</span>{" "}
                <Icons.lineArrow />
              </h3>
              <h1 className="pt-4 text-5xl font-semibold leading-normal text-primary-foreground">
                With a Responsible sourced <br /> Supply Chain
              </h1>
            </div>
            <div>
              <Image
                src="/supplier/ecof.png"
                width={463}
                height={400}
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </section>
      <SellerForm />


    </div>
    </>
  )
}

export default page