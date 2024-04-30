import { useQuery } from "@tanstack/react-query"
import { getAladanData } from "./services/api/aladan/api"
import { getCurrentDayNumber } from "./utils/dates"
import HomePage from "./components/HomePage"
import CitySelect from "./components/CitySelect"
import { ChangeEvent, useState } from "react"

function App() {
  const [city, setCity] = useState("Riyadh")
  const { data, isPending } = useQuery({
    queryKey: ["aladanTime", city],
    queryFn: getAladanData,
  })

  function changeCity(val: ChangeEvent<HTMLSelectElement>) {
    setCity(val.target.value)
  }

  return (
    <>
      <div className="mx-auto w-[80%]">
        <div className="mb-16 mt-2 flex w-full items-center">
          <h1 className="text-4xl">صلواتي</h1>
          <CitySelect onChange={changeCity} countryName={"sa"} />
          <h4 className=" text-2xl">
            {data?.data[getCurrentDayNumber() - 1].date.gregorian.day}{" "}
            {data?.data[getCurrentDayNumber() - 1].date.gregorian.month.en}|
            {data?.data[getCurrentDayNumber() - 1].date.hijri.day}{" "}
            {data?.data[getCurrentDayNumber() - 1].date.hijri.month.ar}
          </h4>
        </div>
        <HomePage isPending={isPending} data={data} />
      </div>
    </>
  )
}

export default App
