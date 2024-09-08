import { to12HoursBased } from '../utils/time'

type propsType = {
  prayName: string
  time: string | undefined
}

function PrayCard({ prayName, time }: propsType) {
  return (
    <div className='mx-4 grow rounded bg-stone-100 p-2 text-center text-black'>
      <h2 className='text-3xl'>{prayName}</h2>
      <hr className='my-1' />
      <h1 className='text-2xl'>{to12HoursBased(time?.slice(0, 5))}</h1>
    </div>
  )
}

export default PrayCard
