import { cn } from '@/lib/utils'
import { Heart } from 'lucide-react'
import React from 'react'

const ProductCard = () => {

    const product: any = [
       {
        id: 1,
        name: "Aafraeen Saree",
        moq: 300,
        imagePath: "/default-image.png",
        isGreenProduct: true,
        sellerId: 1,
       }
    ]
  return (
    <div>
         <div
        className={
          "group relative h-[400px] w-[380px] rounded-sm border border-solid border-inputBorder"
        }
      >
        <div >
          {product[0]?.imagePath ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                // src={baseUrl + product[0]?.imagePath}
                src={
                //   product[0]?.imagePath
                //     ?  + "/" + product[0]?.imagePath
                //     : "/default-image.png"
                "https://images.unsplash.com/photo-1571680322279-a226e6a4cc2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2972&q=80"
                }
                alt={  "Tomato"}
                className="h-72 w-full "
                loading="lazy"
              />
            </>
          ) : (
            // <ImagePlaceholder classNameAdd="h-72 w-full" />
            <></>
          )}
        </div>
        <div className="absolute top-3 flex w-full justify-between px-3">
          {/* <div>{isGreenProduct && <Icons.greenIcon />}</div> */}
          <div
            // className="flex h-10 w-10 items-center justify-center rounded-full bg-black/25"
            // onClick={() =>
            //   SetWishlistPost({
            //     itemId: id,
            //     sellerId: sellerId,
            //   } as ProductWishlist)
            // }
          >
            {/* <Heart
              size={16}
              color={true ? "#f6851f" : "#fff"}
              className={cn(
                "cursor-pointer transition-all duration-300 ease-in-out hover:fill-primary hover:text-primary ",
                // wishlistAdded ? "fill-primary text-primary" : ""
              )}
            /> */}
          </div>
        </div>

        <div
          className={cn(
            "absolute inset-x-0  bottom-0 h-20 bg-white transition-all duration-300 ease-in-out group-hover:h-32",
            // classProduct
          )}
        >
          <div className=" p-4">
            <h3 className="text-lg font-semibold text-green-500">
              { "Aafraeen Saree"}
            </h3>
            <p className="my-2 text-sm font-normal text-secondary-foreground">
              {/* MOQ: { "300"} kg */}
            </p>
            <p className="my-2 text-sm font-normal text-secondary-foreground">
                Price : { "Rs. 100"} / kg
            </p>
            <button
              // onClick={AddToEnquiry}
            //   onClick={open}
              className="hidden w-full rounded-sm border border-primary py-2 text-primary transition-all duration-500 delay-200 ease-in-out hover:bg-primary hover:text-white group-hover:block"
            >
              Buy
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductCard