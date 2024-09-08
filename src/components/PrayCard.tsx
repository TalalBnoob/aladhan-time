import { to12HoursBased } from '../utils/time'

type propsType = {
  prayName: string
  time: string | undefined
}

function PrayCard({ prayName, time }: propsType) {
  return (
    <div className='mx-2 flex h-16 flex-row items-center justify-between rounded bg-stone-100 pr-8  text-center text-black'>
      <h1 className=' flex h-full w-32 items-center justify-end bg-gray-700 px-2 text-2xl font-extrabold text-white'>
        {to12HoursBased(time?.slice(0, 5))}
      </h1>
      <h2 className='text-3xl'>{prayName}</h2>
    </div>
  )
}

export default PrayCard
