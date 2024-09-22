import APIResponse from '../types'
import PrayerGrid from './PrayerGrid'

type propsType = {
  isPending: boolean
  data: APIResponse | undefined
  date: Date | undefined
}

function HomePage({ isPending, data, date }: propsType) {
  return (
    <>
      {isPending ? (
        <h1 className='text-center text-2xl'>.....تحميل اوقات الصلاة</h1>
      ) : (
        <PrayerGrid praysData={data?.data[date.getDate() - 1].timings} />
      )}
    </>
  )
}

export default HomePage
