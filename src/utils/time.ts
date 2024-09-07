export function to12HoursBased(time: string | undefined) {
  const hours = Number(time?.slice(0, 2))
  const minutes = time?.slice(3, 5)

  const newHours = hours > 12 ? hours - 12 : hours
  const suffix = hours > 12 ? 'م' : 'ص'

  return `${suffix} ${newHours}:${minutes}`
}
