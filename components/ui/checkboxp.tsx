import React from "react"

import { cn } from "@/lib/utils"

interface CheckboxProps {
  border?: string
  transparent?: boolean
  checked?: boolean
  onChange?: () => void
  onCheck?: React.ChangeEventHandler<HTMLInputElement> | undefined | any
  name?: string
}

const Checkbox = ({
  border,
  transparent,
  checked,
  onChange,
  onCheck,
  name,
}: CheckboxProps) => {
  // console.log("name : ", name, " checked : ", checked)
  return (
    <>
      <div className="inline-flex items-center">
        <label
          className="relative flex cursor-pointer items-center rounded-full p-3"
          htmlFor="checkbox-4"
          data-ripple-dark="true"
        >
          <input
            type="checkbox"
            className={cn(
              "before:content[''] before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border border-inputBorder transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-primary checked:bg-primary checked:before:bg-primary",
              border && "border-primary",
              transparent && "before:bg-transparent"
            )}
            id={name}
            name={name}
            onChange={onCheck}
            checked={checked}
          />
          <div className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </label>
      </div>
    </>
  )
}

export default Checkbox
