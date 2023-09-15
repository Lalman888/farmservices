import React,{Fragment} from 'react'
import Image from 'next/image'
import { Heart, Star } from 'lucide-react'
import Link from 'next/link'
import { Icons } from '../icons'
import Headernav from '../Header'
const TransportCard = () => {
    const baseUrlLink = ""
    
  return (
    <div>
      
        <div>
        <div className="flex gap-x-2 rounded-t-2xl bg-green-800 p-6">
          <div>
            {/* {supplier?.businessLogo ? (
              <Image
                src={
                  supplier?.businessLogo
                    ? baseUrlLink + "/" + supplier?.businessLogo
                    : "/seller.png"
                }
                width={60}
                height={60}
                alt="supplier logo"
                className="h-16 w-16 rounded-full object-fill"
              />
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#cccccc]">
                <span className="text-xs text-[#333333]">No Logo</span>
              </div>
            )} */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#cccccc]">
                <span className="text-xs text-[#333333]">No Logo</span>
              </div>
          </div>
          <div className="w-full">
            <div className="flex justify-between gap-x-3 border-b border-solid border-inputBorder pb-5">
              <div>
                <div className="flex gap-3">
                  {/* <Link href={`/supplier/apparel/${supplier?._id}`}> */}
                    <h4 className="text-sm font-semibold text-white">
                      {/* {supplier?.businessName &&
                      supplier?.businessName !== "undefined"
                        ? supplier?.businessName
                        : "Business Name Not Available"} */}
                        ABC Transport Services

                    </h4>
                  {/* </Link> */}
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                    <Heart size={14} color="#fff" />
                  </div>
                </div>
                <p className="mt-2 text-xs text-inputBorder">
                  {/* {supplier?.companyAddress &&
                  supplier?.companyAddress !== "undefined"
                    ? supplier?.companyAddress
                    : "company Address Not Available"} */}
                    Company address
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  24th June, 2023
                </h4>
                <div className="mt-2 flex gap-x-1">
                  <p className="text-xs text-secondary-foreground">
                    {/* {supplier?.rating} */} 5
                  </p>
                  <div className="flex gap-x-1">
                    {[1, 2, 3, 4, 5].map((_, index) => (
                      <Fragment key={index}>
                        {index < 4 ? (
                          <>
                            <Star size={16} fill="#F6851F" />
                          </>
                        ) : (
                          <>
                            <Star size={16} fill="#8A9CA0" />
                          </>
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="flex items-center gap-x-3 text-sm text-white">
                <h5>Industry:</h5>
                {/* {supplier?.industies?.length &&
                  supplier?.industies?.map((item: string, index: number) => (
                    <Fragment key={index}>
                      {index < 5 && (
                        <>
                          <span className="bg-secondary-foreground/10 rounded border border-solid border-white/20 px-2 py-1">
                            {item}
                          </span>
                        </>
                      )}
                    </Fragment>
                  ))} */}
              </div>
              {/* <div>{supplier?.isGreen && <Icons.greentag />}</div> */}
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-24 rounded-b-2xl bg-white p-6">
          <div className="grid w-1/3 grid-cols-3 gap-4">
            {["https://toppng.com/uploads/preview/eicher-trucks-png-eicher-truck-11563206628dczepe9sia.png","https://www.pngitem.com/pimgs/m/42-427899_cargo-truck-png-transparent-images-tata-motors-truck.png"]?.map((item: any, index: number) => (
              <Fragment key={index}>
                {index < 5 && (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        item?.length > 0
                          ?     item
                          : "/supplier/products/product.png"
                      }
                      width={112}
                      height={110}
                      alt="product"
                      className="h-28 w-28"
                    />
                  </>
                )}
              </Fragment>
            ))}
            {/* {images?.length > 6 && (
              <div className="relative w-fit">
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="flex items-center">
                    <p className="text-xs font-semibold text-white/90">
                      +{" "}
                      {images?.length > 6 ? images?.length - 6 : images?.length}{" "}
                      More
                    </p>
                  </div>
                </div>
                <Image
                  src={
                    images?.[5]
                      ? baseUrlLink + "/" + images?.[5]
                      : "/supplier/products/product.png"
                  }
                  width={112}
                  height={110}
                  alt="product"
                />
              </div>
            )} */}
          </div>
          <div className="flex w-2/3 justify-between gap-7">
            <div className="flex w-1/2 flex-col justify-between gap-5">
              <div>
                <div className="flex gap-x-2">
                  <Icons.clipboardText />
                  <h4 className="ml-1 text-xs font-semibold text-secondary-foreground">
                    {" "}
                    Top 3 Product Categories
                  </h4>
                </div>
                <div className="ml-6 flex gap-1 mt-2.5">
                  {["TOMATO","WHEAT"] &&
                    ["TOMATO","WHEAT"]?.map((item: string, index: number) => (
                      <Fragment key={index}>
                        {index < 3 && (
                          <>
                            <h3 className="text-xs font-semibold text-black">
                              {item}
                            </h3>
                          </>
                        )}
                      </Fragment>
                    ))}
                </div>
              </div>
              <div>
                <div className="flex gap-x-2">
                  <Icons.certificateA />
                  <h4 className="ml-1 text-xs font-semibold text-secondary-foreground">
                    {" "}
                    Certificates
                  </h4>
                </div>
                <div className="ml-6 mt-2.5">
                  {/* <div className="grid w-max grid-cols-3 gap-3">
                    {supplier?.certificates?.length &&
                      supplier?.certificates?.map(
                        (item: any, index: number) => (
                          <Fragment key={index}>
                            <span className="w-max rounded border border-solid border-white/20 bg-[#8a9ca0]/10 px-4 py-1.5 text-xs uppercase text-secondary">
                              {item?.certificateName}
                            </span>
                          </Fragment>
                        )
                      )}
                  </div> */}
                </div>
              </div>
            </div>
            <div className="flex w-1/2 flex-col justify-between gap-5">
              <div>
                <div className="flex gap-x-2">
                  <Icons.paperEdit />
                  <h4 className="ml-1 text-xs font-semibold text-black">
                    {" "}
                    Minimum Order Quantity (MOQ)
                  </h4>
                </div>
                <div className="ml-6 mt-2.5">
                  <span className="rounded border border-solid border-white/20 px-4 py-1.5 text-xs text-black">
                    {200 || "0"} Units
                  </span>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                //   onClick={generateEnquiry}
                  className="rounded bg-primary px-6 py-4 text-sm font-bold text-white"
                >
                  Generate Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TransportCard

