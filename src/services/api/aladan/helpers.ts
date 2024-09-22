export function getCurrentYear(date: Date): number {
  const currentYear = date.getFullYear()
  return currentYear
}

export function getCurrentMonth(date: Date): number {
  const currentMonth = date.getMonth()
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
