import { Timings } from "../services/api/aladan/responeType"
import PrayCard from "./PrayCard"

type propsType = {
  praysData: Timings | undefined
}

function PrayerGrid({ praysData }: propsType) {
  return (
    <div className="flex justify-between">
      <PrayCard prayName="منتصف الليل" time={praysData?.Midnight} />
      <PrayCard prayName="العشاء" time={praysData?.Isha} />
      <PrayCard prayName="المغرب" time={praysData?.Maghrib} />
      <PrayCard prayName="العصر" time={praysData?.Asr} />
      <PrayCard prayName="الظهر" time={praysData?.Dhuhr} />
      <PrayCard prayName="الشروق" time={praysData?.Sunrise} />
      <PrayCard prayName="الفجر" time={praysData?.Fajr} />
    </div>
  )
}

export default PrayerGrid
