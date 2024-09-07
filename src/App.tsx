import { useQuery } from '@tanstack/react-query'
import { getAladanData } from './services/api/aladan/api'
import { getCurrentDayNumber } from './utils/dates'
import HomePage from './components/HomePage'
import CitySelect from './components/CitySelect'
import { ChangeEvent, useState } from 'react'

function App() {
  const [city, setCity] = useState('Riyadh')
  const { data, isSuccess, isPending } = useQuery({
    queryKey: ['aladanTime', city],
    queryFn: getAladanData,
  })

  function changeCity(val: ChangeEvent<HTMLSelectElement>) {
    setCity(val.target.value)
  }

  return (
    <>
      <div className='mx-auto w-[80%]'>
        <div className='mb-16 mt-2 flex w-full items-center'>
          <h1 className='text-4xl'>صلواتي</h1>
          <CitySelect onChange={changeCity} countryName={'sa'} />
          {isSuccess ? (
            <h4 className='flex gap-3 text-2xl'>
              <div className='flex gap-1'>
                <span>
                  {
                    data?.data[getCurrentDayNumber() - 1].date.gregorian.month
                      .en
                  }
                </span>
                <span>
                  {data?.data[getCurrentDayNumber() - 1].date.gregorian.day}
                </span>
              </div>
              <div className='flex gap-1'>
                <span>
                  {data?.data[getCurrentDayNumber() - 1].date.hijri.month.ar}
                </span>
                <span>
                  {data?.data[getCurrentDayNumber() - 1].date.hijri.day}
                </span>
              </div>
            </h4>
          ) : (
            <h4 className='text-2xl'>جار الحصول على التاريخ</h4>
          )}
        </div>
        <HomePage isPending={isPending} data={data} />
      </div>
    </>
  )
}

export default App
