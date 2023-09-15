"use client"

import React from "react"
import { Select } from "@mantine/core"
import { ChevronDown } from "lucide-react"

interface CountryCode {
  label: string
  value: string
  name: string
}

interface SelectInputProps {
  placeholder: string
  data: string[] | CountryCode[]
  setInputValue?: (value: string) => void
  value?: any
}

const SelectInput: React.FC<SelectInputProps> = ({
  placeholder,
  data,
  setInputValue,
  value = "",
}) => {
  const [Selectvalue, setSelectValue] = React.useState<string | null>(null)

  const handleSelectChange = (value: string) => {
    setSelectValue(value as string)
    setInputValue && setInputValue(value as string)
  }
  return (
    <>
      <Select
        placeholder={placeholder}
        searchable
        nothingFound="No options"
        data={data}
        rightSection={<ChevronDown size={18} />}
        value={value || Selectvalue}
        onChange={handleSelectChange as any}
      />
    </>
  )
}

export default SelectInput
