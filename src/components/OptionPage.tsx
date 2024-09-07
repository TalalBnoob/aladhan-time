import { ChangeEvent, useState } from 'react'
import CitySelect from './CitySelect'

function OptionPage() {
  const [country, setCountry] = useState('saudi-arabia')

  function changeCountry(val: ChangeEvent<HTMLSelectElement>) {
    setCountry(val.target.value)
  }

  return (
    <>
      <form className='text-center' action=''>
        <label className='mr-2 text-gray-200' htmlFor='country'>
          Country
        </label>
        <select
          className='max-w-40 rounded bg-gray-700 px-2 py-1 text-gray-100  focus:outline-none'
          name='country'
          id='country'
          onChange={(val) => changeCountry(val)}
        >
          <option selected value='SA'>
            Saudi Arabia
          </option>
          <option value='YE'>Yemen</option>
        </select>
        <br />
        <CitySelect countryName={country} />
      </form>
    </>
  )
}

export default OptionPage
