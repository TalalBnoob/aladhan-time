export function getCurrentYear(): number {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  return currentYear
}

export function getCurrentMonth(): number {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth()
  return currentMonth
}

export function getMonthName(monthIndexNumber: number): string {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const monthName = monthNames[Number(monthIndexNumber)]
  return monthName
}
