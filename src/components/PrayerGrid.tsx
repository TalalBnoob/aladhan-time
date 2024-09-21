import { Timings } from '../types'
import PrayCard from './PrayCard'

type propsType = {
  praysData: Timings | undefined
}

function PrayerGrid({ praysData }: propsType) {
  return (
    <div className='mx-auto flex w-5/6 flex-col justify-between gap-y-2 md:w-3/4'>
      <PrayCard
        prayName='الفجر'
        time={praysData?.Fajr}
      />
      <PrayCard
        prayName='الشروق'
        time={praysData?.Sunrise}
      />
      <PrayCard
        prayName='الظهر'
        time={praysData?.Dhuhr}
      />
      <PrayCard
        prayName='العصر'
        time={praysData?.Asr}
      />
      <PrayCard
        prayName='المغرب'
        time={praysData?.Maghrib}
      />

      <PrayCard
        prayName='العشاء'
        time={praysData?.Isha}
      />
      <PrayCard
        prayName='منتصف الليل'
        time={praysData?.Midnight}
      />
    </div>
  )
}

export default PrayerGrid
