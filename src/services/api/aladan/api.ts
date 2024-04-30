import { getCurrentMonth, getCurrentYear } from "./helpers"
import APIResponse from "./responeType"

const baseUrl = `https://api.aladhan.com/v1/calendarByCity`

export async function getAladanData({ queryKey }) {
  const fullUrl = `${baseUrl}/${getCurrentYear()}/${getCurrentMonth() + 1}?city=${queryKey[1]}&country=sa&method=3`
  const res = await fetch(fullUrl)
  const aladhanData: APIResponse = await res.json()
  return aladhanData
}
