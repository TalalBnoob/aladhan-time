import { getCurrentDayNumber } from "../utils/dates"
import APIResponse from "../services/api/aladan/responeType"
import PrayerGrid from "./PrayerGrid"

type propsType = {
  isPending: boolean
  data: APIResponse | undefined
}

function HomePage(props: propsType) {
  return (
    <>
      {props.isPending ? (
        <h1 className="text-center text-2xl">.....تحميل اوقات الصلاة</h1>
      ) : (
        <PrayerGrid
          praysData={props.data?.data[getCurrentDayNumber() - 1].timings}
        />
      )}
    </>
  )
}

export default HomePage
