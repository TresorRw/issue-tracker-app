'use client'
import Select from 'react-select';

const MultiSelect = ({ data, name }: { data: any, name: string }) => {
  return (
    <Select
      defaultValue={''}
      isMulti
      required
      name={name}
      options={data}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  )
}

export default MultiSelect