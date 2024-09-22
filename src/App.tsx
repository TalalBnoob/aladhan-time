import { useQuery } from '@tanstack/react-query'
import { getAladanData } from './services/api/aladan/api'
import HomePage from './components/HomePage'
import CitySelect from './components/CitySelect'
import { ChangeEvent, useState } from 'react'
import DatePicker from './components/DatePicker'
import { useDate } from './hooks/useDate'
import { getCurrentMonth, getCurrentYear } from './services/api/aladan/helpers'

function App() {
  const { time } = useDate()
  const [city, setCity] = useState('Riyadh')
  const [date, setDate] = useState<Date | undefined>(new Date())
  const { data, isSuccess, isPending } = useQuery({
    queryKey: ['aladanTime', city, getCurrentMonth(date as Date) + 1, getCurrentYear(date as Date)],
    queryFn: getAladanData,
  })

  function changeCity(val: ChangeEvent<HTMLSelectElement>) {
    setCity(val.target.value)
  }

  return (
    <>
      <div className='mx-auto w-full md:w-3/4'>
        <div className='mb-16 mt-2 flex h-40 w-full flex-col items-center justify-between gap-1 md:flex-row'>
          <div className='flex flex-row items-end gap-3'>
            <h1 className='text-4xl'>صلواتي</h1>
            {isSuccess ? (
              <h4 className='flex gap-3 text-xl	'>
                <div className='flex gap-1'>
                  <span>{data.data[date.getDate() - 1].date.hijri.month.ar}</span>
                  <span>{data.data[date.getDate() - 1].date.hijri.day}</span>
                </div>
              </h4>
            ) : (
              <h4 className='text-2xl'>جار الحصول على التاريخ</h4>
            )}
          </div>
          <h2 className='mb-1 text-2xl'>{time}</h2>
          <div className='flex flex-col items-center gap-1 gap-y-2 md:flex-row'>
            <DatePicker
              date={date}
              setDate={setDate}
            />
            <CitySelect
              onChange={changeCity}
              countryName={'sa'}
            />
          </div>
        </div>
        <HomePage
          isPending={isPending}
          data={data}
          date={date}
        />
      </div>
    </>
  )
}

export default App
