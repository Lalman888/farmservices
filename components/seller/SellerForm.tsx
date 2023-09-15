"use client"

import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
// import { useFormik } from "formik"
// import toast from "react-hot-toast"

// import instance from "@/lib/axios"
// import { fetcher } from "@/lib/fetcher"
// import useLineOfBusiness from "@/hooks/useLineOfBussiness"
import SelectInput from "@/components/ui/SelectInput"
// import Checkbox from "@/components/ui/checkboxp"

interface Form {
  dateOfIncorporation: string
  leiNumber?: string
  parentCompany?: string
  numberOfActiveClients: number
  companyProfile: string
  productCategory?: string
  lineOfBusiness?: string
  lastYearTurnover?: string
  eligibilityForDigitalCatalogue: boolean
}

const SellerForm = () => {
  const router = useRouter()
  const [selectProductCategory, setSelectProductCategory] =
    React.useState<string>("")
  // console.log(selectProductCategory, "selectProductCategory")
  const [lineOfBusinessvalue, setLineOfBusinessvalue] =
    React.useState<string>("")
//   const [seller, setSeller] = React.useState<Form>({} as Form//values)
//   const lineofBusiness = useLineOfBusiness()
  // console.log(lineofBusiness, "lineofBusiness")

//   const getSeller = async () => {
//     const data = await fetcher("/sellers/seller-profile")
//     setSeller(data?.seller)
//     // console.log(data, "seller")
//   }
//   useEffect(() => {
//     getSeller()
//   }, [])
//   const formik = useFormik<Form//values>({
//     initial//values: {
//       dateOfIncorporation: "",
//       leiNumber: seller?.leiNumber,
//       parentCompany: seller?.parentCompany,
//       numberOfActiveClients: seller?.numberOfActiveClients,
//       companyProfile: seller?.companyProfile,
//       lastYearTurnover: "",
//       eligibilityForDigitalCatalogue: false,
//     },

//     onSubmit: async (//values: Form//values) => {
//       if (localStorage?.getItem("token")) {
//         try {
//           const { data } = await instance.post(
//             "/sellers/register",
//             {
//               ...//values,
//               productCategory: selectProductCategory,
//               lineOfBusiness: lineOfBusiness//value,
//             },
//             {
//               headers: {
//                 Authorization: `Bearer ${localStorage.getItem("token")}`,
//               },
//             }
//           )
//           // console.log(data, "seller form")
//           toast.success(data?.message)
//           if (data?.seller) {
//             localStorage.setItem("Seller", data?.seller?._id)
//           }
//           router.push("/supplier_dashboard")
//         } catch (error) {
//           // console.log(error, "err")
//           toast.error("Something went wrong")
//         }
//       } else {
//         toast.error("Please login to continue")
//       }
//     },
//   })

  return (
    <>
      <section className="bg-primary-foreground py-28">
        <div className="px-28">
          <div className="rounded-xl bg-white px-14 py-8">
            <h2 className=" w-full border-b border-solid border-inputBorder pb-5 font-crimson text-2xl font-semibold">
              Become a Seller
            </h2>
            <form className="pt-10" 
            // onSubmit={formik.handleSubmit}
            >
              <div className="mb-6 flex gap-x-40">
                <div className="w-1/2 flex flex-col">
                  <label className=" mb-2 text-xs text-secondary-foreground">
                    Date of Incorporation
                  </label>
                  <input
                    type="date"
                    className="input_secondary_nimp mt-2 py-3"
                    id="dateOfIncorporation"
                    name="dateOfIncorporation"
                    // //onChange={formik.handleChange}
                    // //value={formik.//values.dateOfIncorporation}
                  />
                </div>
                <div className="w-1/2 flex flex-col">
                  <label className=" mb-2 text-xs text-secondary-foreground">
                    LEI Number (Optional)
                  </label>
                  <input
                    type="text"
                    className="input_secondary_nimp mt-2 py-3"
                    placeholder="KYYT79732900098709"
                    name="leiNumber"
                    id="leiNumber"
                    //onChange={formik.handleChange}
                    //value={formik.//values.leiNumber}
                  />
                </div>
              </div>
              <div className="mb-6 flex gap-x-40">
                <div className="w-1/2 flex flex-col">
                  <label className=" mb-2 text-xs text-secondary-foreground">
                    Parent Company (Optional)
                  </label>
                  <input
                    type="text"
                    className="input_secondary_nimp mt-2 py-3"
                    placeholder="parent company"
                    id="parentCompany"
                    name="parentCompany"
                    //onChange={formik.handleChange}
                    //value={formik.//values.parentCompany}
                  />
                </div>
                <div className="w-1/2 flex flex-col">
                  <label className=" mb-2 text-xs text-secondary-foreground">
                    Active Clients
                  </label>
                  <input
                    type="text"
                    className="input_secondary_nimp mt-2 py-3"
                    placeholder="10+"
                    id="numberOfActiveClients"
                    name="numberOfActiveClients"
                    //onChange={formik.handleChange}
                    //value={formik.//values.numberOfActiveClients}
                  />
                </div>
              </div>
              <div className="mb-6 flex gap-x-40">
                <div className="w-1/2 flex flex-col">
                  <label className=" mb-2 text-xs text-secondary-foreground">
                    Company Profile
                  </label>
                  <input
                    type="text"
                    className="input_secondary_nimp mt-2 py-3"
                    placeholder="Company Profile"
                    id="companyProfile"
                    name="companyProfile"
                    //onChange={formik.handleChange}
                    //value={formik.//values.companyProfile}
                  />
                </div>
                <div className="w-1/2 flex flex-col">
                  <label className=" mb-2 text-xs text-secondary-foreground">
                    Product Category
                  </label>
                  <SelectInput
                    placeholder="Select Product Category"
                    data={["Apparel", "Accessories", "Footwear"]}
                    // setInputvalue={setSelectProductCategory}
                  />
                </div>
              </div>
              <div className="mb-6 flex gap-x-40">
                <div className="w-1/2 flex flex-col">
                  <label className=" mb-2 text-xs text-secondary-foreground">
                    Line of Business
                  </label>
                  <SelectInput
                    placeholder="Select Line of Business"
                    data={["Manufacturer", "Trader", "Retailer"]}
                    // setInputvalue={setLineOfBusiness//value}
                  />
                </div>
                <div className="w-1/2 flex flex-col">
                  <label className=" mb-2 text-xs text-secondary-foreground">
                    Turnover of Last Year in USD (Optional)
                  </label>
                  <input
                    type="text"
                    className="input_secondary_nimp mt-2 py-3"
                    placeholder="Turnover of Last Year in USD "
                    id="lastYearTurnover"
                    name="lastYearTurnover"
                    //onChange={formik.handleChange}
                    //value={formik.//values.lastYearTurnover}
                  />
                </div>
              </div>
              <div className="mb-6 flex gap-x-40">
                <div className="w-1/2 flex flex-col">
                  <label className=" mb-2 text-xs text-secondary-foreground">
                    Production Capacity (Units/Month)
                  </label>

                  <SelectInput
                    placeholder="Select Production Capacity"
                    data={["10", "100", "1000", "10000", "100000"]}
                  />
                </div>
                <div className="flex w-1/2  flex-col items-center">
                  {/* <Checkbox
                    checked={formik.//values.eligibilityForDigitalCatalogue}
                    onCheck={formik.handleChange}
                    name="eligibilityForDigitalCatalogue"
                  /> */}
                  {/* <input type="checkbox" className="checkbox" />
                  <label className="ml-2 text-xs text-secondary-foreground">
                    Share Digital Showroom
                  </label> */}
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-8 rounded bg-primary px-40 py-6 text-sm font-semibold text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default SellerForm
